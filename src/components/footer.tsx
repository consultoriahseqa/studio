export default function Footer() {
  return (
    <footer className="py-6 border-t mt-12">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Texto Maestro. Potenciado por IA.</p>
      </div>
    </footer>
  );
}
