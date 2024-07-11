-- Name: task; Type: TABLE; Schema: public; Owner: taskmanager

CREATE TABLE public.task (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    status public.task_status_enum DEFAULT 'PENDING'::public.task_status_enum NOT NULL
);
