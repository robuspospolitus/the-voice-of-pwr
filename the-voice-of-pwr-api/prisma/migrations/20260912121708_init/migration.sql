-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "hashed_pass" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lecturers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "mail" TEXT NOT NULL,

    CONSTRAINT "lecturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty" (
    "shortcut" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,

    CONSTRAINT "faculty_pkey" PRIMARY KEY ("shortcut")
);

-- CreateTable
CREATE TABLE "field_of_study" (
    "shortcut" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "faculty_shortcut" TEXT NOT NULL,

    CONSTRAINT "field_of_study_pkey" PRIMARY KEY ("shortcut")
);

-- CreateTable
CREATE TABLE "lecturers_faculty" (
    "id" SERIAL NOT NULL,
    "lecturer_id" INTEGER NOT NULL,
    "faculty_shortcut" TEXT NOT NULL,

    CONSTRAINT "lecturers_faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "field_of_study_shortcut" TEXT NOT NULL,
    "semester" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lecturer_classes" (
    "id" SERIAL NOT NULL,
    "lecturer_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "lecturer_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dorms" (
    "shortcut" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "localization" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "dorms_pkey" PRIMARY KEY ("shortcut")
);

-- CreateTable
CREATE TABLE "lecturer_opinions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lecturer_id" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "lecturer_opinions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dorm_opinions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "dorm_shortcut" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "dorm_opinions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_opinions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "course_opinions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "lecturer_opinions_user_id_lecturer_id_key" ON "lecturer_opinions"("user_id", "lecturer_id");

-- CreateIndex
CREATE UNIQUE INDEX "dorm_opinions_user_id_dorm_shortcut_key" ON "dorm_opinions"("user_id", "dorm_shortcut");

-- CreateIndex
CREATE UNIQUE INDEX "course_opinions_user_id_course_id_key" ON "course_opinions"("user_id", "course_id");

-- AddForeignKey
ALTER TABLE "field_of_study" ADD CONSTRAINT "field_of_study_faculty_shortcut_fkey" FOREIGN KEY ("faculty_shortcut") REFERENCES "faculty"("shortcut") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers_faculty" ADD CONSTRAINT "lecturers_faculty_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "lecturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturers_faculty" ADD CONSTRAINT "lecturers_faculty_faculty_shortcut_fkey" FOREIGN KEY ("faculty_shortcut") REFERENCES "faculty"("shortcut") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_field_of_study_shortcut_fkey" FOREIGN KEY ("field_of_study_shortcut") REFERENCES "field_of_study"("shortcut") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturer_classes" ADD CONSTRAINT "lecturer_classes_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "lecturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturer_classes" ADD CONSTRAINT "lecturer_classes_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturer_opinions" ADD CONSTRAINT "lecturer_opinions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturer_opinions" ADD CONSTRAINT "lecturer_opinions_lecturer_id_fkey" FOREIGN KEY ("lecturer_id") REFERENCES "lecturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dorm_opinions" ADD CONSTRAINT "dorm_opinions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dorm_opinions" ADD CONSTRAINT "dorm_opinions_dorm_shortcut_fkey" FOREIGN KEY ("dorm_shortcut") REFERENCES "dorms"("shortcut") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_opinions" ADD CONSTRAINT "course_opinions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_opinions" ADD CONSTRAINT "course_opinions_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
