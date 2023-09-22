import { Book } from "@prisma/client";

export type CreateReview = Omit<Book, "id" | "title" | "author" | "publisher" | "purchaseDate" | "read" | "cover"> & { bookId: number };