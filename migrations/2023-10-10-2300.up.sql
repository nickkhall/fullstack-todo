-- Diff code generated with pgModeler (PostgreSQL Database Modeler)
-- pgModeler version: 1.0.5
-- Diff date: 2023-10-10 23:00:04
-- Source model: todo
-- Database: todo
-- PostgreSQL version: 15.0

-- [ Diff summary ]
-- Dropped objects: 0
-- Created objects: 0
-- Changed objects: 1

SET search_path=public,pg_catalog;
-- ddl-end --


-- [ Changed objects ] --
ALTER TABLE public."user" ALTER COLUMN last_login SET DEFAULT now();
-- ddl-end --

