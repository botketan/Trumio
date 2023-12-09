import 'package:app/models/badge_model.dart';
import 'package:app/widgets/badge_card.dart';
import 'package:flutter/material.dart';
import 'package:moon_design/moon_design.dart';

class BadgesListWidget extends StatelessWidget {
  List<BadgeModel> badges;
  BadgesListWidget({
    super.key,
    required this.badges,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding:
              const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            children: [
              const Text(
                "Badges",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontWeight: FontWeight.w500,
                  fontSize: 14.0,
                  color: Color(0xFF595D62),
                ),
              ),
              const Spacer(),
              MoonTextButton(
                onTap: () {},
                height: 24.0,
                label: const Text('View All',
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontWeight: FontWeight.w600,
                      fontSize: 12.0,
                      color: Color(0xFF4E46B4),
                    )),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(4.0),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(
          height: 8.0,
        ),
        SizedBox(
          height: 172.0,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.zero,
            children: [
              const SizedBox(
                width: 16.0,
              ),
              ..._buildBadges(),
              const SizedBox(
                width: 4.0,
              ),
            ],
          ),
        ),
      ],
    );
  }

  List<Widget> _buildBadges() {
    List<Widget> badgesList = [];
    for (int i = 0; i < badges.length; i++) {
      badgesList.add(
        BadgeCard(
          badgeModel: badges[i],
        ),
      );
      badgesList.add(
        const SizedBox(
          width: 12.0,
        ),
      );
    }
    return badgesList;
  }
}
