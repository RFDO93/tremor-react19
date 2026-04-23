"use client";
import React from "react";
import {
  DayPicker,
} from "react-day-picker";
import "react-day-picker/src/style.css";

type CalendarProps = {
  mode?: "single" | "multiple" | "range";
  month?: Date;
  selected?: any;
  onSelect?: any;
  locale?: any;
  disabled?: any;
  enableYearNavigation?: boolean;
  classNames?: Record<string, string>;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showOutsideDays?: boolean;
  [key: string]: any;
};

function Calendar({
  enableYearNavigation = false,
  classNames = {},
  ...props
}: CalendarProps) {
  const mergedClassNames = {
    //months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    //month: "space-y-4",
    // caption: "flex justify-center pt-2 relative items-center",
    // caption_label:
    //   "text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis font-medium",
    // nav: "space-x-1 flex items-center",
    // nav_button:
    //   "flex items-center justify-center p-1 h-7 w-7 outline-none focus:ring-2 transition duration-100 border border-tremor-border dark:border-dark-tremor-border hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted rounded-tremor-small focus:border-tremor-brand-subtle dark:focus:border-dark-tremor-brand-subtle focus:ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted text-tremor-content-subtle dark:text-dark-tremor-content-subtle hover:text-tremor-content dark:hover:text-dark-tremor-content",
    // nav_button_previous: "absolute left-1",
    // nav_button_next: "absolute right-1",
    // table: "w-full border-collapse space-y-1",
    // head_row: "flex",
    // head_cell:
    //   "w-9 font-normal text-center text-tremor-content-subtle dark:text-dark-tremor-content-subtle",
    // row: "flex w-full mt-0.5",
    // cell: "text-center p-0 relative focus-within:relative text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",
    // day: "h-9 w-9 p-0 hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle outline-tremor-brand dark:outline-dark-tremor-brand rounded-tremor-default",
    // day_today: "font-bold",
    // day_selected:
    //   "aria-selected:bg-tremor-background-emphasis aria-selected:text-tremor-content-inverted dark:aria-selected:bg-dark-tremor-background-emphasis dark:aria-selected:text-dark-tremor-content-inverted ",
    // day_disabled:
    //   "text-tremor-content-subtle dark:text-dark-tremor-content-subtle aria-disabled:hover:bg-transparent",
    // day_outside: "text-tremor-content-subtle dark:text-dark-tremor-content-subtle",
    ...(classNames as Record<string, string>),
  };

  return (
    <DayPicker
      {...(props as any)}
      classNames={mergedClassNames}
    />
  );
}

Calendar.displayName = "Calendar";

export default Calendar;
