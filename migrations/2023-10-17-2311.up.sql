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
-- object: user_id | type: COLUMN --
-- ALTER TABLE public.todos DROP COLUMN IF EXISTS user_id CASCADE;
ALTER TABLE public.todos ADD COLUMN user_id uuid;
-- ddl-end --




-- [ Changed objects ] --
ALTER TABLE public.todos ALTER COLUMN id TYPE uuid;
-- ddl-end --

