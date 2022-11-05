# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Create a new table `customIds` with fields: `facility_id`, `agent_id`, `custom_id` as foriegn keys mapped to the primary key of `facilities`, `agents` tables respective.

Ticket 2: Create a function maybe `setAgentCustomId`, this should update the `customIds` table with the required fields indentifing the agent, facility and the facility prefered `custom_id`.

TIcket 3: Update the `getShiftsByFacility` function to check if an agent from the returned shifts exits in the `customIds` table for a specific facility. This can be done using JOIN for SQL or Aggregate/lookup for MongoDB esily. If it does exist replace the internal `_id` in the agent metadata with the found `custom_id` else return the internal `_id`.

NB: Old/already exisitng agents for a facility can be added to the new `customIds` table by updateing the function responsible for creating new agents or editing aagents for a particular facility.

DS: Proper test to make sure every function tied to edited functions must be done to make sure nothing breaks and proper peer reviews and unit/integration tests helps here too.