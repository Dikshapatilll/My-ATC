

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <img src="webqa-main/src/assets/logo.png" alt="Logo" className="h-6 w-6 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-card-foreground">
                Atlas Copco Quality Assurance
              </h1>
              <p className="text-sm text-muted-foreground">
                Part Number Analysis & Tracking Portal
              </p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;