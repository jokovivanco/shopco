CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"image" text NOT NULL,
	"category" text NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
