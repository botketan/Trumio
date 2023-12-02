import 'package:app/widgets/note_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class NotesListWidget extends StatelessWidget {
  const NotesListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding:
              const EdgeInsets.symmetric(horizontal: 20.0),
          child: Row(
            children: [
              const Text(
                "Share your ideas",
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
                label: const Text('Compose',
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontWeight: FontWeight.w600,
                      fontSize: 12.0,
                      color: Color(0xFF4E46B4),
                    )),
                leading: SvgPicture.asset(
                  'assets/compose_icon.svg',
                  color: const Color(0xFF4E46B4),
                  width: 16.0,
                ),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(4.0),
                  color: const Color(0xFFE9E8F6),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(
          height: 12.0,
        ),
        SizedBox(
          height: 176.0,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.zero,
            children: const [
              SizedBox(
                width: 16.0,
              ),
              NoteCard(),
              SizedBox(
                width: 12.0,
              ),
              NoteCard(),
              SizedBox(
                width: 12.0,
              ),
              NoteCard(),
              SizedBox(
                width: 12.0,
              ),
              NoteCard(),
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
