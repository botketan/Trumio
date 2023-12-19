import 'package:app/models/post_model.dart';
import 'package:app/models/user_model.dart';
import 'package:app/utils/app_data_layer.dart';
import 'package:app/widgets/note_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class NotesListWidget extends StatefulWidget {
  final UserModel userModel;
  const NotesListWidget({
    super.key,
    required this.userModel,
  });

  @override
  State<NotesListWidget> createState() => _NotesListWidgetState();
}

class _NotesListWidgetState extends State<NotesListWidget> {
  final List<PostModel> posts = []; 

  @override
  void initState() {
    super.initState();
    
    WidgetsBinding.instance.addPostFrameCallback((_) {
      AppDataLayer().getUserAuthoredPosts(widget.userModel.id).then((value) {
        setState(() {
          posts.addAll(value);
        });
      });
    });
  }

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
            children: [
              const SizedBox(
                width: 16.0,
              ),
              ..._buildNotes(),
              const SizedBox(
                width: 4.0,
              ),
            ],
          ),
        ),
      ],
    );
  }

  List<Widget> _buildNotes() {
    List<Widget> notes = [];
    for (var i = 0; i < posts.length-2; i++) {
      notes.add(NoteCard(
        postModel: posts[i],
      ));
      notes.add(const SizedBox(
        width: 12.0,
      ));
    }
    return notes.reversed.toList();
  }
}
