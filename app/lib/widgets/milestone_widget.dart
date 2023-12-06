import 'package:app/models/milestone_model.dart';
import 'package:flutter/material.dart';
import 'package:moon_design/moon_design.dart';

class MilestoneWidget extends StatefulWidget {
  final MilestoneModel milestoneModel;
  final int index;
  const MilestoneWidget({
    super.key,
    required this.milestoneModel,
    required this.index,
  });

  @override
  State<MilestoneWidget> createState() => _MilestoneWidgetState();
}

class _MilestoneWidgetState extends State<MilestoneWidget> with SingleTickerProviderStateMixin {
  bool _isExpanded = false;
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(
        milliseconds: 300,
      ),
      vsync: this,
    );
    _animation = Tween(
      begin: 0.0,
      end: 1.0,
    ).animate(_controller);
  }

  @override
  dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: AnimatedSize(
        duration: const Duration(milliseconds: 150),
        curve: Curves.easeIn,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(4.0),
            border: Border.all(
              color: const Color(0xFFE2E2E2),
            ),
          ),
          child: Column(
            children: [
              const SizedBox(
                height: 8.0,
              ),
              Row(
                children: [
                  IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () {
                      if (_isExpanded) {
                        _controller.reverse().then((value) => {
                          setState(() {
                            _isExpanded = !_isExpanded;
                          })
                        });
                      } else {
                        setState(() {
                          _isExpanded = !_isExpanded;
                        });
                        _controller.forward();
                      }
                    },
                    icon: Icon(
                      (_isExpanded)
                          ? Icons.keyboard_arrow_down
                          : Icons.keyboard_arrow_right,
                      size: 20.0,
                    ),
                    iconSize: 20.0,
                    color: const Color(0xFF707070),
                  ),
                  Expanded(
                    child: Text(
                      "Milestone ${widget.index}: ${widget.milestoneModel.title}",
                      overflow: TextOverflow.visible,
                      style: const TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w500,
                        fontSize: 14.0,
                        color: Color(0xFF595D62),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Text(
                    "${widget.milestoneModel.tasks.where((element) => element.isCompleted).toList().length}/${widget.milestoneModel.tasks.length} Tasks",
                    style: const TextStyle(
                      fontFamily: "DMSans",
                      fontWeight: FontWeight.w600,
                      fontSize: 14.0,
                      color: Colors.black,
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  MoonTag(
                    borderRadius: BorderRadius.circular(4.0),
                    backgroundColor: const Color(0xFFE5EFE6),
                    height: 24.0,
                    label: const Text(
                      "ON TRACK",
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w700,
                        fontSize: 10.0,
                        color: Color(0xFF2E7D32),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                ],
              ),
              const SizedBox(
                height: 8.0,
              ),
              (_isExpanded) ?
                FadeTransition(
                  opacity: _animation,
                  child: Column(
                    children: _buildTasks(),
                  ),
                ) : Container(),
            ],
          ),
        ),
      ),
    );
  }

  List<Widget> _buildTasks() {
    List<Widget> tasks = [];
    for (var element in widget.milestoneModel.tasks) {
      tasks.add(
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              width: 24.0,
            ),
            MoonCheckbox(
              value: element.isCompleted,
              onChanged: (val) {
                setState(() {
                  element.isCompleted = val ?? false;
                });
              },
              activeColor: const Color(0xFF4E46B4),
              tapAreaSizeValue: 24.0,
            ),
            const SizedBox(
              width: 8.0,
            ),
            Flexible(
              child: Padding(
                padding: const EdgeInsets.only(top: 1.0),
                child: Text(
                  element.title,
                  style: const TextStyle(
                    fontFamily: "DMSans",
                    fontWeight: FontWeight.w500,
                    fontSize: 16.0,
                    color: Colors.black,
                  ),
                ),
              ),
            ),
          ],
        ),
      );
      tasks.add(
        const SizedBox(
          height: 8.0,
        ),
      );
    }

    tasks.add(
      const SizedBox(
        height: 4.0,
      ),
    );

    return tasks;
  }
}


                // Row(
                //   children: [
                //     const SizedBox(
                //       width: 56.0,
                //     ),
                //     Container(
                //       width: 214.0,
                //       decoration: BoxDecoration(
                //         borderRadius: BorderRadius.circular(4.0),
                //         border: Border.all(
                //           color: const Color(0xFFE2E2E2),
                //         ),
                //       ),
                //       child: const Column(
                //         crossAxisAlignment: CrossAxisAlignment.start,
                //         children: [
                //           SizedBox(
                //             height: 4.0,
                //           ),
                //           Padding(
                //             padding: EdgeInsets.symmetric(horizontal: 8.0),
                //             child: Text(
                //               "Create and finalize the wireframe designs for all app screens",
                //               style: TextStyle(
                //                 fontFamily: "DMSans",
                //                 fontWeight: FontWeight.w500,
                //                 fontSize: 12.0,
                //                 color: Color(0xFF595D62),
                //               ),
                //             ),
                //           ),
                //           SizedBox(
                //             height: 12.0,
                //           ),
                //           Padding(
                //             padding: EdgeInsets.symmetric(horizontal: 8.0),
                //             child: Text(
                //               "Completed on 28 Nov, 2023",
                //               style: TextStyle(
                //                 fontFamily: "DMSans",
                //                 fontWeight: FontWeight.w500,
                //                 fontSize: 12.0,
                //                 color: Color(0xFF595D62),
                //               ),
                //             ),
                //           ),
                //           SizedBox(
                //             height: 4.0,
                //           ),
                //         ],
                //       ),
                //     ),
                //   ],
                // ),
                // const SizedBox(
                //   height: 44.0,
                // ),