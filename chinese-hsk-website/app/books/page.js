import BooksView from "@/components/books/books-view";

export const metadata = {
  title: "HSK Textbooks & Learning Materials | HSK 1 - 6 Standard Course",
  description:
    "Official HSK Standard Course textbooks, exercise workbooks, listening audio tracks, and mock examination papers for HSK 1, 2, 3, 4, 5, and 6.",
};

export const revalidate = 300;

export default function BooksPage() {
  return <BooksView />;
}
