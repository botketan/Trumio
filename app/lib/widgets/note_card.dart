import 'package:app/models/post_model.dart';
import 'package:flutter/material.dart';

class NoteCard extends StatelessWidget {
  final PostModel postModel;
  const NoteCard({
    super.key,
    required this.postModel,
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
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 12.0,
            ),
            Text(
              postModel.stringContent ?? "No content",
              maxLines: 1,
              style: const TextStyle(
                fontFamily: "DMSans",
                fontWeight: FontWeight.w600,
                fontSize: 14.0,
                color: Colors.black,
              ),
            ),
            const SizedBox(
              height: 4.0,
            ),
            Text(
              postModel.stringContent ?? "No content",
              maxLines: 6,
              style: const TextStyle(
                fontFamily: "DMSans",
                fontWeight: FontWeight.w500,
                fontSize: 12.0,
                color: Color(0xFF595D62),
              ),
            ),
            const SizedBox(
              height: 12.0,
            ),
            const Text(
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
