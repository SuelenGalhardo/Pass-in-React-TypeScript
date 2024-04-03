
import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useState } from "react";
//import relativeTime from "dayjs/plugin/relativeTime";
//dayjs.extend(relativeTime);
dayjs.locale("pt-br");


interface Attendee {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}




export function AttendeeList() {

  const [valorDoInput, ChangeInputValue  ]= useState ('')


  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    ChangeInputValue (event.target.value)
}
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participants</h1>
        <div className=" px-3 w-72 py-1.5 border border-white/10 rounded-lg  text-sm flex items-center gap-3 ">
          <Search className="size-4 text-emerald-300" />
          <input onChange={onSearchInputChanged}
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0"
            placeholder="search participant..."
          />
          {valorDoInput}
        </div>
      </div>

      
      <Table>
          <thead>
            <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Participant</TableHeader>
            <TableHeader>Date of the registration</TableHeader>
            <TableHeader>Check-in date</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
            </tr>
          </thead>
          <tbody>
          {attendees.map((ateendee) => {
              return (
                <TableRow key={ateendee.id}>
                    <TableCell>
                
                    <input type="checkbox" className=" size-4 bg-black/20 rounded border border-white/10"/>
                    </TableCell>
                  <TableCell>   {ateendee.id}</TableCell>

                  <TableCell>
                    <div className="flex  flex-col gap-1">
                      <span className=" font-semibold text-white">
                      {ateendee.name}
                      </span>
                      <span>{ateendee.email}</span>
                    </div>
                    </TableCell>
                  <TableCell>
                  {dayjs().to(ateendee.createdAt)}
                    </TableCell>
                  <TableCell>
                  {ateendee.checkedInAt === null ? (
                    <span className="text-zinc-400">Não fez check-in</span>
                  ) : (
                    dayjs().to(ateendee.checkedInAt)
                  )}
                    </TableCell>
                  <TableCell> 
                    <IconButton transparent>
                    <MoreHorizontal className="size-4 " />
                    </IconButton>
                    </TableCell>
                  </TableRow>
              );
            })}
          </tbody>

          <tfoot>
            <tr>

            <TableCell colSpan={3}>
              
                Showing {attendees.length} of {total} items
        
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className=" inline-flex items-center gap-8">
                <span>
                  Page {page} of {totalPages}
                </span>
                  <div className=" flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4 " />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4 " />
                      </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4 " />
                      </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4 " />
                      </IconButton>
                  </div>
                </div>
                </TableCell>
            </tr>
          </tfoot>
          </Table>
      </div>
  
  );
}
