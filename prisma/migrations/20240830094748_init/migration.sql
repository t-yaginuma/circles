/*
  Warnings:

  - You are about to drop the `audit_log_entries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `flow_state` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `identities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `instances` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mfa_amr_claims` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mfa_challenges` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mfa_factors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `one_time_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refresh_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `saml_providers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `saml_relay_states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schema_migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sso_domains` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sso_providers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "storage";

-- DropForeignKey
ALTER TABLE "auth"."identities" DROP CONSTRAINT "identities_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."mfa_amr_claims" DROP CONSTRAINT "mfa_amr_claims_session_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."mfa_challenges" DROP CONSTRAINT "mfa_challenges_auth_factor_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."mfa_factors" DROP CONSTRAINT "mfa_factors_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."one_time_tokens" DROP CONSTRAINT "one_time_tokens_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."refresh_tokens" DROP CONSTRAINT "refresh_tokens_session_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."saml_providers" DROP CONSTRAINT "saml_providers_sso_provider_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."saml_relay_states" DROP CONSTRAINT "saml_relay_states_flow_state_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."saml_relay_states" DROP CONSTRAINT "saml_relay_states_sso_provider_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."sessions" DROP CONSTRAINT "sessions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth"."sso_domains" DROP CONSTRAINT "sso_domains_sso_provider_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "auth"."audit_log_entries";

-- DropTable
DROP TABLE "auth"."flow_state";

-- DropTable
DROP TABLE "auth"."identities";

-- DropTable
DROP TABLE "auth"."instances";

-- DropTable
DROP TABLE "auth"."mfa_amr_claims";

-- DropTable
DROP TABLE "auth"."mfa_challenges";

-- DropTable
DROP TABLE "auth"."mfa_factors";

-- DropTable
DROP TABLE "auth"."one_time_tokens";

-- DropTable
DROP TABLE "auth"."refresh_tokens";

-- DropTable
DROP TABLE "auth"."saml_providers";

-- DropTable
DROP TABLE "auth"."saml_relay_states";

-- DropTable
DROP TABLE "auth"."schema_migrations";

-- DropTable
DROP TABLE "auth"."sessions";

-- DropTable
DROP TABLE "auth"."sso_domains";

-- DropTable
DROP TABLE "auth"."sso_providers";

-- DropTable
DROP TABLE "auth"."users";

-- DropTable
DROP TABLE "public"."Post";

-- DropTable
DROP TABLE "public"."User";

-- DropEnum
DROP TYPE "auth"."aal_level";

-- DropEnum
DROP TYPE "auth"."code_challenge_method";

-- DropEnum
DROP TYPE "auth"."factor_status";

-- DropEnum
DROP TYPE "auth"."factor_type";

-- DropEnum
DROP TYPE "auth"."one_time_token_type";

-- CreateTable
CREATE TABLE "storage"."buckets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner" UUID,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "public" BOOLEAN DEFAULT false,
    "avif_autodetection" BOOLEAN DEFAULT false,
    "file_size_limit" BIGINT,
    "allowed_mime_types" TEXT[],
    "owner_id" TEXT,

    CONSTRAINT "buckets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storage"."migrations" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "hash" VARCHAR(40) NOT NULL,
    "executed_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storage"."objects" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "bucket_id" TEXT,
    "name" TEXT,
    "owner" UUID,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "last_accessed_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "path_tokens" TEXT[] DEFAULT string_to_array(name, '/'::text),
    "version" TEXT,
    "owner_id" TEXT,
    "user_metadata" JSONB,

    CONSTRAINT "objects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storage"."s3_multipart_uploads" (
    "id" TEXT NOT NULL,
    "in_progress_size" BIGINT NOT NULL DEFAULT 0,
    "upload_signature" TEXT NOT NULL,
    "bucket_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "owner_id" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_metadata" JSONB,

    CONSTRAINT "s3_multipart_uploads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storage"."s3_multipart_uploads_parts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "upload_id" TEXT NOT NULL,
    "size" BIGINT NOT NULL DEFAULT 0,
    "part_number" INTEGER NOT NULL,
    "bucket_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "etag" TEXT NOT NULL,
    "owner_id" TEXT,
    "version" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "s3_multipart_uploads_parts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bname" ON "storage"."buckets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "migrations_name_key" ON "storage"."migrations"("name");

-- CreateIndex
CREATE INDEX "idx_objects_bucket_id_name" ON "storage"."objects"("bucket_id", "name");

-- CreateIndex
CREATE INDEX "name_prefix_search" ON "storage"."objects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bucketid_objname" ON "storage"."objects"("bucket_id", "name");

-- CreateIndex
CREATE INDEX "idx_multipart_uploads_list" ON "storage"."s3_multipart_uploads"("bucket_id", "key", "created_at");

-- AddForeignKey
ALTER TABLE "storage"."objects" ADD CONSTRAINT "objects_bucketId_fkey" FOREIGN KEY ("bucket_id") REFERENCES "storage"."buckets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "storage"."s3_multipart_uploads" ADD CONSTRAINT "s3_multipart_uploads_bucket_id_fkey" FOREIGN KEY ("bucket_id") REFERENCES "storage"."buckets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "storage"."s3_multipart_uploads_parts" ADD CONSTRAINT "s3_multipart_uploads_parts_bucket_id_fkey" FOREIGN KEY ("bucket_id") REFERENCES "storage"."buckets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "storage"."s3_multipart_uploads_parts" ADD CONSTRAINT "s3_multipart_uploads_parts_upload_id_fkey" FOREIGN KEY ("upload_id") REFERENCES "storage"."s3_multipart_uploads"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
