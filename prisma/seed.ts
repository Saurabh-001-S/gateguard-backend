import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Departments
  const [cs, mech, elec, civil] = await Promise.all([
    prisma.department.upsert({ where: { name: "Computer Science" }, update: {}, create: { name: "Computer Science" } }),
    prisma.department.upsert({ where: { name: "Mechanical" }, update: {}, create: { name: "Mechanical" } }),
    prisma.department.upsert({ where: { name: "Electrical" }, update: {}, create: { name: "Electrical" } }),
    prisma.department.upsert({ where: { name: "Civil" }, update: {}, create: { name: "Civil" } }),
  ]);

  // Gate config
  await prisma.gateConfig.upsert({
    where: { id: 1 },
    update: {},
    create: {
      gateNo: 1,
      latitude: 20.718807,
      longitude: 70.939909,
      radius: 500,
      isActive: true,
    },
  });

  // Admin
  const adminPass = await bcrypt.hash("Admin@123", 12);
  await prisma.admin.upsert({
    where: { email: "admin@college.edu" },
    update: {},
    create: { name: "Head Admin", email: "admin@college.edu", password: adminPass },
  });

  // Sample students
  const studentPass = await bcrypt.hash("Student@123", 12);
  await prisma.student.upsert({
    where: { email: "aryan@college.edu" },
    update: {},
    create: {
      email: "aryan@college.edu",
      password: studentPass,
      name: "Aryan Mehta",
      mobileNo: "9876543210",
      roomNo: "A-204",
      gender: "MALE",
      departmentId: cs.id,
      currentStatus: "INSIDE",
    },
  });

  await prisma.student.upsert({
    where: { email: "priya@college.edu" },
    update: {},
    create: {
      email: "priya@college.edu",
      password: studentPass,
      name: "Priya Shah",
      mobileNo: "9876543211",
      roomNo: "B-112",
      gender: "FEMALE",
      departmentId: mech.id,
      currentStatus: "OUTSIDE",
    },
  });

  console.log("✅ Seed complete");
  console.log("   Admin:   admin@college.edu / Admin@123");
  console.log("   Student: aryan@college.edu / Student@123");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
