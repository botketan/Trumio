import 'package:flutter/material.dart';

class NoteCard extends StatelessWidget {
  const NoteCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 152.0,
      height: 176.0,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12.0),
        border:
            Border.all(color: const Color(0xFFE2E2E2)),
      ),
      child: const Padding(
        padding: EdgeInsets.symmetric(horizontal: 16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: 12.0,
            ),
            Text(
              "Exploring ML",
              style: TextStyle(
                fontFamily: "DMSans",
                fontWeight: FontWeight.w600,
                fontSize: 14.0,
                color: Colors.black,
              ),
            ),
            SizedBox(
              height: 4.0,
            ),
            Text(
              "Reflecting on this journey, I've grown not just as a developer but also as a problem-solver and creative thinker. Sta ...",
              maxLines: 6,
              style: TextStyle(
                fontFamily: "DMSans",
                fontWeight: FontWeight.w500,
                fontSize: 12.0,
                color: Color(0xFF595D62),
              ),
            ),
            SizedBox(
              height: 12.0,
            ),
            Text(
              "Updated 2 days ago",
              style: TextStyle(
                fontFamily: "DMSans",
                fontWeight: FontWeight.w500,
                fontSize: 10.0,
                color: Color(0xFF595D62),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
