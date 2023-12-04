import 'package:app/models/project_model.dart';
import 'package:app/widgets/milestone_widget.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class MilestoneTrackerWidget extends StatefulWidget {
  final List<ProjectModel> projects;
  const MilestoneTrackerWidget({
    super.key,
    required this.projects,
  });

  @override
  State<MilestoneTrackerWidget> createState() => _MilestoneTrackerWidgetState();
}

class _MilestoneTrackerWidgetState extends State<MilestoneTrackerWidget> {
  int _currentProjectIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          border: Border.all(color: const Color(0xFFE2E2E2)),
        ),
        child: Column(
          children: [
            const SizedBox(
              height: 12.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      height: 64.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4.0),
                        border: Border.all(
                          color: const Color(0xFFE2E2E2),
                        ),
                      ),
                      child: Row(children: [
                        const SizedBox(
                          width: 16.0,
                        ),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              "Project",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 12.0,
                                color: Color(0xFF595D62),
                              ),
                            ),
                            Text(
                              widget.projects[_currentProjectIndex].title,
                              style: const TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w600,
                                fontSize: 16.0,
                                color: Colors.black,
                              ),
                            ),
                          ],
                        ),
                        const Spacer(),
                        PopupMenuButton<int>(
                          surfaceTintColor: Colors.white,
                          onSelected: (int value) {
                            setState(() {
                              _currentProjectIndex = value;
                            });
                          },
                          itemBuilder: (BuildContext context) {
                            return widget.projects.mapIndexed((index, item) {
                              return PopupMenuItem<int>(
                                value: index,
                                child: Text(
                                  item.title,
                                  style: const TextStyle(
                                    fontFamily: "DMSans",
                                    fontWeight: FontWeight.w500,
                                    fontSize: 16.0,
                                    color: Colors.black,
                                  ),
                                ),
                              );
                            }).toList();
                          },
                          icon: SvgPicture.asset(
                            "assets/controls_icon.svg",
                            width: 24.0,
                            color: Colors.black,
                          ),
                        ),
                        const SizedBox(
                          width: 2.0,
                        ),
                      ]),
                    ),
                  ),
                  const SizedBox(
                    width: 12.0,
                  ),
                  Container(
                    height: 64.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4.0),
                      border: Border.all(
                        color: const Color(0xFFE2E2E2),
                      ),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            "Progress",
                            style: TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w500,
                              fontSize: 12.0,
                              color: Color(0xFF595D62),
                            ),
                          ),
                          Text(
                            "${widget.projects[_currentProjectIndex].progress}%",
                            style: const TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w600,
                              fontSize: 14.0,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            ..._buildMilestones(),
          ],
        ),
      ),
    );
  }

  List<Widget> _buildMilestones() {
    List<Widget> milestones = [
      const SizedBox(
        height: 8.0,
      ),
    ];
    widget.projects[_currentProjectIndex].milestones.forEachIndexed((index, e) {
      milestones.add(
        MilestoneWidget(
          milestoneModel: e,
          index: index + 1,
        ),
      );

      milestones.add(
          const SizedBox(
          height: 8.0,
        ),
      );
    });
    return milestones;
  }
}
