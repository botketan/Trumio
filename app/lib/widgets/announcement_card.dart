import 'package:flutter/material.dart';

class AnnouncementCard extends StatelessWidget {
  const AnnouncementCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 342.0,
      height: 132.0,
      child: Card(
        color: Colors.white,
        surfaceTintColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(4.0),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 12.0,
            ),
            Row(
              children: [
                const SizedBox(
                  width: 12.0,
                ),
                Image.asset(
                  "assets/avatar.png",
                  height: 40.0,
                  width: 40.0,
                ),
                const SizedBox(
                  width: 8.0,
                ),
                const Column(
                  crossAxisAlignment:
                      CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Vidya Sagar",
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontSize: 12,
                        fontWeight: FontWeight.w600,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(
                      height: 2.0,
                    ),
                    Text(
                      "2 hours ago",
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontSize: 12,
                        fontWeight: FontWeight.w500,
                        color: Color(0x66000000),
                      ),
                    ),
                  ],
                ),
              ],
            ),
            const SizedBox(
              height: 8.0,
            ),
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 12.0),
              child: Text(
                "Morbi at nunc interdum, laoreet dolor vel, congue felis. Pellentesque pretium quam nec fringilla iaculis. Nullam lectus leo, condimentum ut iaculis facilisis,",
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontSize: 12,
                  fontWeight: FontWeight.w500,
                  color: Color(0xB2000000),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
