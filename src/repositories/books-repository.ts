import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database/index";

export async function getBooks() {
  const result = await prisma.book.findMany();

  return result;
}

export async function getBook(id: number) {
  const result = await prisma.book.findUnique({
    where: { id }
  });

  return result;
}

export async function createBook(book: CreateBook) {
  book.purchaseDate = new Date(book.purchaseDate); // prisma espera uma data em formato ISO 8601

  const result = await prisma.book.create({
    data: book
  });

  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  const result = await prisma.book.update({
    data: {
      grade,
      review,
      read: true
    },
    where: {
      id: bookId
    }
  });
  
  return result;
}