-- Diff code generated with pgModeler (PostgreSQL Database Modeler)
-- pgModeler version: 1.0.5
-- Diff date: 2023-10-17 23:10:25
-- Source model: todo
-- Database: todo
-- PostgreSQL version: 15.0

-- [ Diff summary ]
-- Dropped objects: 0
-- Created objects: 1
-- Changed objects: 1

SET search_path=public,pg_catalog;
-- ddl-end --

-- [ Created objects ] --
-- object: public."user" | type: TABLE --
-- DROP TABLE IF EXISTS public."user" CASCADE;
CREATE TABLE public."todos" (
	id uuid NOT NULL,
	name varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	created_at int NOT NULL,
	completed boolean NOT NULL,
	complete_by int,
	user_id uuid
	completed_at int
);


