## Database Configuration

### Create the Task Table

To create the `task` table, execute the following SQL script:

```sql
-- Name: task; Type: TABLE; Schema: public; Owner: taskmanager

CREATE TABLE public.task (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    status public.task_status_enum DEFAULT 'PENDING'::public.task_status_enum NOT NULL
);

```
### Create Indexes

To optimize query performance, execute the following SQL scripts:


```sql
CREATE INDEX idx_task_status ON public.task(status);
-- Assuming there is a creation_date column, if not, you should add it.
CREATE INDEX idx_task_creation_date ON public.task(creation_date);

```
### Pagination and Sorting Query

To fetch tasks with pagination and sorting, use the following SQL query:


```sql
SELECT * FROM public.task
ORDER BY status, creation_date
LIMIT 10 OFFSET 0;

```