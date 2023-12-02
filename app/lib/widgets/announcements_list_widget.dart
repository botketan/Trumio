import 'package:app/widgets/announcement_card.dart';
import 'package:flutter/material.dart';
import 'package:moon_design/moon_design.dart';

class AnnouncementsListWidget extends StatelessWidget {
  const AnnouncementsListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            children: [
              const SizedBox(
                width: 4.0,
              ),
              const Text(
                "Announcements",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
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
                      color: Color(0xFF0578FB),
                    )),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(4.0),
                ),
              ),
              const SizedBox(
                width: 4.0,
              ),
            ],
          ),
        ),
        const SizedBox(
          height: 8.0,
        ),
        SizedBox(
          height: 132.0,
          child: ListView(
            padding: EdgeInsets.zero,
            scrollDirection: Axis.horizontal,
            children: const [
              SizedBox(
                width: 16.0,
              ),
              AnnouncementCard(),
              SizedBox(
                width: 12.0,
              ),
              AnnouncementCard(),
              SizedBox(
                width: 16.0,
              ),
            ],
          ),
        ),
      ],
    );
  }
}

