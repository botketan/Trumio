import 'package:app/models/badge_model.dart';
import 'package:flutter/material.dart';

class BadgeCard extends StatelessWidget {
  final BadgeModel badgeModel;
  const BadgeCard({
    super.key,
    required this.badgeModel,
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
              child: SizedBox(
                height: 48.0,
                child: Image.network(
                  badgeModel.image,
                  height: 48.0,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            const SizedBox(
              height: 16.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(
                  horizontal: 16.0),
              child: Text(
                badgeModel.heading,
                style: const TextStyle(
                  fontFamily: "DMSans",
                  fontWeight: FontWeight.w600,
                  fontSize: 14.0,
                  color: Colors.black,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(
                  horizontal: 16.0),
              child: Text(
                badgeModel.description,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
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
            Row(
              children: [
                const Spacer(),
                Text(
                  badgeModel.status,
                  style: const TextStyle(
                    fontFamily: "DMSans",
                    fontWeight: FontWeight.w500,
                    fontSize: 12.0,
                    color: Color(0xFF4E46B4),
                  ),
                ),
                const SizedBox(
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
