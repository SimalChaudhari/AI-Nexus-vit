const AdminFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-body px-4 py-3 md:px-6 md:py-4">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-price">
          © {currentYear} Gudworld. All rights reserved.
        </p>
        <p className="text-xs text-price">
          Admin Panel v1.0
        </p>
      </div>
    </footer>
  )
}

export default AdminFooter

