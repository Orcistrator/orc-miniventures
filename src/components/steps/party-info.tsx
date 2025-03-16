import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { fetchClasses, APIReference } from "@/lib/dnd5e-api";

// Define the form schema
const formSchema = z.object({
  playerCount: z.coerce
    .number()
    .min(1, { message: "Player count must be at least 1" })
    .max(10, { message: "Player count must be at most 10" }),
  playerLevel: z.coerce
    .number()
    .min(1, { message: "Player level must be at least 1" })
    .max(20, { message: "Player level must be at most 20" }),
  selectedClasses: z.array(z.string()).min(1, { message: "Select at least one class" }),
});

// Define the type for the form values
type PartyInfo = z.infer<typeof formSchema>;

export default function PartyInfo() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [classes, setClasses] = useState<APIReference[]>([]);
  const [isLoadingClasses, setIsLoadingClasses] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  // Initialize the form
  const form = useForm<PartyInfo>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerCount: 4,
      playerLevel: 1,
      selectedClasses: [],
    },
  });

  // Fetch classes from the D&D 5e API
  useEffect(() => {
    const getClasses = async () => {
      setIsLoadingClasses(true);
      try {
        const classData = await fetchClasses();
        setClasses(classData.results);
      } catch (error) {
        console.error("Failed to fetch classes:", error);
      } finally {
        setIsLoadingClasses(false);
      }
    };

    getClasses();
  }, []);

  // Handle form submission
  const onSubmit = async (values: PartyInfo) => {
    setIsLoading(true);

    // Format the class composition string
    const classComposition = values.selectedClasses.join(", ");

    try {
      // Make the API request to generate an adventure
      const response = await fetch("/api/generate-adventure", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerCount: values.playerCount,
          playerLevel: values.playerLevel,
          classComposition,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate adventure");
      }

      // Navigate to the adventure page
      router.push("/adventure");
    } catch (error) {
      console.error("Error generating adventure:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Party Information</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="playerCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Players</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="4"
                    {...field}
                    min={1}
                    max={10}
                  />
                </FormControl>
                <FormDescription>
                  How many players are in your party?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="playerLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Player Level</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1"
                    {...field}
                    min={1}
                    max={20}
                  />
                </FormControl>
                <FormDescription>
                  What level are your players?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="selectedClasses"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class Composition</FormLabel>
                <div className="flex flex-col gap-2">
                  <Popover open={openPopover} onOpenChange={setOpenPopover}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openPopover}
                          className="w-full justify-between"
                        >
                          {field.value.length > 0
                            ? `${field.value.length} class${field.value.length > 1 ? "es" : ""} selected`
                            : "Select classes"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search classes..." />
                        <CommandEmpty>No classes found.</CommandEmpty>
                        <CommandGroup>
                          <ScrollArea className="h-60">
                            {isLoadingClasses ? (
                              <div className="flex justify-center p-4">
                                <LoadingSpinner />
                              </div>
                            ) : (
                              classes.map((classItem) => (
                                <CommandItem
                                  key={classItem.index}
                                  value={classItem.index}
                                  onSelect={(value) => {
                                    const selected = [...field.value];
                                    const index = selected.indexOf(classItem.name);
                                    if (index === -1) {
                                      selected.push(classItem.name);
                                    } else {
                                      selected.splice(index, 1);
                                    }
                                    field.onChange(selected);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      field.value.includes(classItem.name) ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {classItem.name}
                                </CommandItem>
                              ))
                            )}
                          </ScrollArea>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {field.value.map((className) => (
                        <Badge
                          key={className}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {className}
                          <button
                            type="button"
                            className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            onClick={() => {
                              const selected = [...field.value];
                              const index = selected.indexOf(className);
                              if (index !== -1) {
                                selected.splice(index, 1);
                                field.onChange(selected);
                              }
                            }}
                          >
                            <span className="sr-only">Remove {className}</span>
                            <span className="text-xs">✕</span>
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <FormDescription>
                  What classes are in your party?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/")}
            >
              Back
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <LoadingSpinner /> : "Generate Adventure"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
} 