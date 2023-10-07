export   function filteredrestaurant(allrestaurants, searchtext) {
    return allrestaurants.filter((res) =>
      res?.info?.name
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchtext.toLowerCase().replace(/\s/g, ""))
    );
  }