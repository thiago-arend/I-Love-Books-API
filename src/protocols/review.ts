import { books } from "@prisma/client";

export type CreateReview = Omit<books, "id" | "title" | "author" | "publisher" | "purchaseDate" | "read" | "cover"> & { bookId: number };