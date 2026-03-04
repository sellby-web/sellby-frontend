const menuItems = ["Home", "My Ads", "About Us", "Settings"];

function Sidebar() {
  return (
    <aside>
      <div>Logo</div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
      <button>Sell Item +</button>
    </aside>
  );
}

export default Sidebar;
