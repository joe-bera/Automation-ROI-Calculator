'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { tasks, getCategories } from '@/data/tasks';

interface TaskSelectorProps {
  value: string;
  onChange: (taskId: string) => void;
}

export function TaskSelector({ value, onChange }: TaskSelectorProps) {
  const categories = getCategories();
  const selectedTask = tasks.find((t) => t.id === value);

  const tasksByCategory = categories.reduce((acc, category) => {
    acc[category] = tasks.filter((task) => task.category === category);
    return acc;
  }, {} as Record<string, typeof tasks>);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">
        What task do you want to automate?
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a task" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
            <SelectGroup key={category}>
              <SelectLabel className="text-slate-400">{category}</SelectLabel>
              {categoryTasks.map((task) => (
                <SelectItem key={task.id} value={task.id}>
                  {task.name}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>

      {selectedTask && (
        <p className="text-sm text-slate-400">{selectedTask.description}</p>
      )}
    </div>
  );
}
