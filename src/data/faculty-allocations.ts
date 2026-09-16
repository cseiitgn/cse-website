import allocations from './faculty-allocations.json';
import type { FacultyCategory } from './faculty';

export type ResearchGroupSlug = 'theory' | 'systems' | 'ai';
export type FacultyAllocation = {
  name: string;
  category: FacultyCategory;
  areas: ResearchGroupSlug[];
};

const categories = new Set(['core', 'affiliated', 'joint', 'practice', 'visiting', 'teaching', 'guest']);
const areas = new Set(['theory', 'systems', 'ai']);
const names = new Set<string>();
for (const allocation of allocations) {
  if (names.has(allocation.name) || !categories.has(allocation.category) ||
      allocation.areas.some(area => !areas.has(area)) ||
      new Set(allocation.areas).size !== allocation.areas.length) {
    throw new Error(`Invalid faculty allocation: ${allocation.name}`);
  }
  names.add(allocation.name);
}

// Imported from CSE-faculty-allocations.xlsx on 16 September 2026.
// An empty areas array explicitly records an unallocated faculty member.
export const FACULTY_ALLOCATIONS = allocations as FacultyAllocation[];

export function validateAllocationCoverage(roster: { name: string }[]) {
  const rosterNames = new Set(roster.map(member => member.name));
  const missing = roster.filter(member => !names.has(member.name));
  const unknown = allocations.filter(member => !rosterNames.has(member.name));
  if (rosterNames.size !== roster.length || missing.length || unknown.length) {
    throw new Error(`Faculty allocation mismatch. Missing: ${missing.map(m => m.name).join(', ')}; unknown: ${unknown.map(m => m.name).join(', ')}`);
  }
}
