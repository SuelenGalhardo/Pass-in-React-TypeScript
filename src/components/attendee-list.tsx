//import { IconButton } from "./icon-button"

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center"></div>
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div>
        <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"   placeholder="Buscar participante..."/>
      </div>
    </div>
  );
}
