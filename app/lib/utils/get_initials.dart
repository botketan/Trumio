String getInitials(String name) {
  List<String> names = name.split(" ");
  String initials = "";
  int numWords = 2;
  if (names.length < 2) {
    numWords = names.length;
  }
  for (int i = 0; i < numWords; i++) {
    initials += names[i][0];
  }
  return initials;
}