import 'package:flutter/material.dart';

class AchievementCard extends StatelessWidget {
  const AchievementCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(12.0),
      child: Container(
        width: 194.0,
        height: 172.0,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          border: Border.all(
              color: const Color(0xFFE2E2E2)),
        ),
        child: Column(
          crossAxisAlignment:
              CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 16.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(
                  horizontal: 16.0),
              child: Container(
                width: 48.0,
                height: 48.0,
                color: const Color(0xFFF5F5F5),
              ),
            ),
            const SizedBox(
              height: 12.0,
            ),
            const Padding(
              padding: EdgeInsets.symmetric(
                  horizontal: 16.0),
              child: Text(
                "Thumbs-Up Trooper",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontWeight: FontWeight.w600,
                  fontSize: 14.0,
                  color: Colors.black,
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.symmetric(
                  horizontal: 16.0),
              child: Text(
                "Appreciate posts every day for 5 days.",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontWeight: FontWeight.w500,
                  fontSize: 12.0,
                  color: Color(0xFF595D62),
                ),
              ),
            ),
            const SizedBox(
              height: 8.0,
            ),
            const Row(
              children: [
                Spacer(),
                Text(
                  "3 days left",
                  style: TextStyle(
                    fontFamily: "DMSans",
                    fontWeight: FontWeight.w500,
                    fontSize: 12.0,
                    color: Color(0xFF4E46B4),
                  ),
                ),
                SizedBox(
                  width: 16.0,
                ),
              ],
            ),
            const Spacer(),
            Stack(
              children: [
                Container(
                  height: 4.0,
                  width: double.infinity,
                  color: const Color(0xFFE5EFE6),
                ),
                Row(
                  children: [
                    Expanded(
                      flex: 2,
                      child: Container(
                        height: 4.0,
                        width: double.infinity,
                        color:
                            const Color(0xFF2E7D32),
                      ),
                    ),
                    Expanded(
                      flex: 3,
                      child: Container(),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
