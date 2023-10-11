-- Diff code generated with pgModeler (PostgreSQL Database Modeler)
-- pgModeler version: 1.0.5
-- Diff date: 2023-10-10 22:48:02
-- Source model: todo
-- Database: todo
-- PostgreSQL version: 15.0

-- [ Diff summary ]
-- Dropped objects: 0
-- Created objects: 1
-- Changed objects: 0

SET search_path=public,pg_catalog;
-- ddl-end --


-- [ Created objects ] --
-- object: public."user" | type: TABLE --
-- DROP TABLE IF EXISTS public."user" CASCADE;
CREATE TABLE public."user" (
	id uuid NOT NULL,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	last_login timestamp

);
-- ddl-end --
ALTER TABLE public."user" OWNER TO postgres;
-- ddl-end --

