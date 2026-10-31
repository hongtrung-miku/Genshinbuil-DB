

const characters = {
    furina: {
        // 1. Thông tin cơ bản
        name: "Furina de Fontaine",
        backgroundColor: "#168DB5",
        pcolor: "#276b82",
        subtitle: "Hyper build",
        image: "./imgGenShin/BGR/FurinaB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Răng nanh rỉ sét",
            image: "./imgGenShin/wp/răng.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí 5 sao đề xuất cho Furina.",
                "Furina vận hành xoay quanh kỹ năng nộ nên cần lượng nạp cao.",
                "Chỉ khuyến nghị mang các vũ khí tăng bạo kích hoặc HP khi đã có trên 200% nạp từ di vật."
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "Đoàn kịch hoàng kim",
            image: "./imgGenShin/Atifact/Đk.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món phù hợp cho cách chơi của Furina.",
                "Nếu không có, có thể thay thế bằng bộ ghép 2 món tăng 20% nạp và 15% HP."
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng nguyên tố",
                "Kỹ năng nộ"
            ],
            images: [
                "./imgGenShin/Skill/FurinaS/FuE.png",
                "./imgGenShin/Skill/FurinaS/FuQ.png"
            ],
            description:
                "Ưu tiên nâng kỹ năng dựa trên vai trò và cách xây dựng nhân vật."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Hu Tao bốc hơi full form",
                members: [
                    {
                        name: "Furina",
                        image: "./imgGenShin/char/furina.jpg"
                    },
                    {
                        name: "Hu Tao",
                        image: "./imgGenShin/char/Hutao.webp"
                    },
                    {
                        name: "Yelan",
                        image: "./imgGenShin/char/yelan.webp"
                    },
                    {
                        name: "Xilonen",
                        image: "./imgGenShin/char/xilonen.webp"
                    }
                ],
                description:
                    "Rottation: Furina EQ(lấy buff) > Xilonen Q2NA (Trừ kháng ,hồi máu để tích tần náo nhiệt , Yelan EQ cấp thủy > Hutao E và bắt đầu trọng kích đến khi hết E)"
            }
        ]
    },
    hutao : {
        // 1. Thông tin cơ bản
        name: "Hu Tao",
        subtitle: "Hyper build",
        backgroundColor: "#762B32",
        pcolor: "#ac4f58",
        image: "./imgGenShin/BGR/HutaoB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Trượng HOMA",
            image: "./imgGenShin/wp/HOMA.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí 5 sao đề xuất cho Hu Tao.",
                "Hu Tao vận hành xoay quanh lượng buff tự thân từ kỹ năng nguyên tố chủ đạo là đòn trọng kích.",
                "Có tương đối đa dạng lựa chọn vũ khí có chỉ số bạo kích và tinh thông nguyên tố."
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "DIệm Liệt Ma Nữ Cháy Rực",
            image: "./imgGenShin/Atifact/MN.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món phù hợp cho cách chơi của Hu Tao.",
                "Nếu không có, có thể thay thế bằng Thợ săn hoặc Giấc Mọng Hoàng Kim."
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng Đáng thương",
                "Kỹ Nguyên tố",
                "Kỹ năng Nộ Nâng Tùy Nhu cầu"
            ],
            images: [
                "./imgGenShin/Skill/HutaoS/HutaoNA.png",
                "./imgGenShin/Skill/HutaoS/HutaoQ.png"
            ],
            description:
                "Ưu tiên nâng kỹ năng dựa trên vai trò và cách xây dựng nhân vật."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Hu Tao bốc hơi full form",
                members: [
                    {
                         name: "Hu Tao",
                        image: "./imgGenShin/char/Hutao.webp"
                    },
                    {
                        name: "Furina",
                        image: "./imgGenShin/char/furina.jpg"
                    },
                    {
                        name: "Yelan",
                        image: "./imgGenShin/char/yelan.webp"
                    },
                    {
                        name: "Xilonen",
                        image: "./imgGenShin/char/xilonen.webp"
                    }
                ],
                description:
                    "Rottation: Furina EQ(lấy buff) > Xilonen Q2NA (Trừ kháng ,hồi máu để tích tần náo nhiệt , Yelan EQ cấp thủy > Hutao E và bắt đầu trọng kích đến khi hết E)"
            }
        ]
    },
yelan : {
        // 1. Thông tin cơ bản
        name: "Yelan",
        subtitle: "Hyper build",
        backgroundColor: "#434FC0",
        pcolor: "#3B395E",
        image: "./imgGenShin/BGR/YelanB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Cung Tây Phong",
            image: "./imgGenShin/wp/CTP.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí  đề xuất cho Yelan.",
                "Sức mạnh của Yelan xoay quay kỹ năng nộ , nên cần ưu tiên các vũ khí cũng cấp hiệu quả nạp.",
                "Ngoài cung tây phong là lựa chọn tối ưu cho gần như mọi trường hợp cũng có thể dùng Tiếng thở dài vô tận để có thêm buff , Chỉ khuyến nghị sữ dụng các vũ khí tăng HP hoặc bạo kích khi có từ 200% hiệu quả nạp nguyên tố từ di vật hoặc đã có cung mệnh 1 của Yelan."
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "Dấu ấn ngăn cách",
            image: "./imgGenShin/Atifact/DA.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món là lựa chọn tốt nhất cho lối chơi của Yelan.",
                "Nếu không có, có thể thay thế bằng các bộ ghép cung cấp 20% hiệu quả nạp hoặc 20%HP."
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng Nộ",
                "Kỹ Nguyên tố",
                "Kỹ năng đánh thường nâng tùy nhu cầu"
            ],
            images: [
                "./imgGenShin/Skill/YelanS/YelanQ.png",
                "./imgGenShin/Skill/YelanS/YelanE.png"
            ],
            description:
                "Ưu tiên nâng kỹ năng nộ đầu tiên, kỹ năng nguyên tố và đánh thường có thể nâng theo nhu cầu."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Hu Tao bốc hơi full form",
                members: [
                    {
                        name: "Furina",
                        image: "./imgGenShin/char/furina.jpg"
                    },
                    {
                        name: "Hu Tao",
                        image: "./imgGenShin/char/Hutao.webp"
                    },
                    {
                        name: "Yelan",
                        image: "./imgGenShin/char/yelan.webp"
                    },
                    {
                        name: "Xilonen",
                        image: "./imgGenShin/char/xilonen.webp"
                    }
                ],
                description:
                    "Rottation: Furina EQ(lấy buff) > Xilonen Q2NA (Trừ kháng ,hồi máu để tích tần náo nhiệt , Yelan EQ cấp thủy > Hutao E và bắt đầu trọng kích đến khi hết E)"
            }
        ]
    },  


     xilonen : {
        // 1. Thông tin cơ bản
        name: "Xilonen",
        subtitle: "Hyper build",
        backgroundColor: "#d7ae6b",
        pcolor: "#D99A39",
        image: "./imgGenShin/BGR/XilonenB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Khúc ca núi đá",
            image: "./imgGenShin/wp/Khúc-ca.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí đề xuất cho Xilonen.",
                "Lượng Debuff của xilonen gần xoay quanh cấp độ của kỹ năng nguyên tố nên không cần thiết phải sữ dụng vũ khí tăng chỉ số .",
                "Ngoài trấn có thể cung cấp thêm một lượng buff sát thương nguyên tố có thể dùng (Lời thề tự do cổ xưa) với chức năng tương tự) không có khuyến nghị dùng (Tây phong kiếm) để hổ trợ nạp cho đội hình ."
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "Bức Tranh Dũng Sĩ Thành Tro Tàn",
            image: "./imgGenShin/Atifact/BT.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món phù hợp cho cách chơi của Xilonen",
                "Nếu không có hoặc trong đội đã có nhân vật khác dùng bộ di vật kể trên, có thể thay thế bằng các bộ di vật hổ trợ khác phù hợp vơi đội hình"
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng nguyên tố",
                "Kỹ năng nộ",
            
            ],
            images: [
                "./imgGenShin/Skill/XilonenS/XilonenE.png",
                "./imgGenShin/Skill/XilonenS/XilonenQ.png"
            ],
            description:
                "Xilonen chỉ cần nâng kỹ năng nguyên tố để phát huy vai trò debuff của mình ngoài ra có thê nâng 6-8 điểm vào kỹ năng nộ để gia tăng lượng trị liệu."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Hu Tao bốc hơi full form",
                members: [
                    {
                       name: "Xilonen",
                        image: "./imgGenShin/char/xilonen.webp"
                    },
                    {
                        name: "Hu Tao",
                        image: "./imgGenShin/char/Hutao.webp"
                    },
                    {
                        name: "Yelan",
                        image: "./imgGenShin/char/yelan.webp"
                    },
                    {
                        name: "Furina",
                        image: "./imgGenShin/char/furina.jpg"
                    }
                ],
                description:
                    "Rottation: Furina EQ(lấy buff) > Xilonen Q2NA (Trừ kháng ,hồi máu để tích tần náo nhiệt , Yelan EQ cấp thủy > Hutao E và bắt đầu trọng kích đến khi hết E)"
            }
        ]
    },





     nicole : {
        // 1. Thông tin cơ bản
        name: "Nicole",
        subtitle: "Hyper build",
        backgroundColor: "#EDAE9F",
        pcolor: "#dcb37b",
        image: "./imgGenShin/BGR/NicoleB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Trần quang thất dụ",
            image: "./imgGenShin/wp/Thất-dụ.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí đề xuất cho Nicole.",
                "Lượng Debuff của Nicole xoay quanh Kỹ năng nguyên tố và chỉ số ATK của cô ta ưu tiên các vũ khí có lượng lớn tân công .",
                "Ngoài trấn có thể cung cấp lượng lớn chỉ số ATK cho Nicole và buff sát thương cộng thêm cho đồng đội thì có thể dùng bất kỳ vũ khí nào cung cấp lượng lớn tân công cho người trang bị như (Quyển thiên không...), trong trường hợp Rottaion cho phép có thể dùng (Câu chuyện diệt rồng)."
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "Phước lành trời cao",
            image: "./imgGenShin/Atifact/PL.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món phù hợp cho cách chơi của Nicole",
                "Cung cấp thêm 40% sát thương cộng thêm cho đồng đội nếu không có hoặc đã có nhân vật khác trong đội sữ dụng có thể dùng các bộ di vật hổ trợ khác hoặc các bộ ghép tăng ATK"
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng nguyên tố",
                "Kỹ năng nộ",
            
            ],
            images: [
                "./imgGenShin/Skill/NicoleS/NicoleE.png",
                "./imgGenShin/Skill/NicoleS/NicoleQ.png"
            ],
            description:
                "Nicole chỉ cần nâng kỹ năng nguyên tố để phát huy vai trò Tạo khiên + Buff ATK của mình .Ngoài ra có thể hỗ trợ sát thương dựa vào kỹ năng nộ."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Hu Tao bốc hơi fake bennet",
                members: [
                    {
                        name: "Nicole",
                        image: "./imgGenShin/char/nicole.jpg"
                    },
                    {
                        name: "Hu Tao",
                        image: "./imgGenShin/char/Hutao.webp"
                    },
                    {
                        name: "Yelan",
                        image: "./imgGenShin/char/yelan.webp"
                    },
                    {
                        name: "Xilonen",
                        image: "./imgGenShin/char/xilonen.webp"
                    }
                ],
                description:
                    "Rottation: Nicole EQ(lấy buff) > Xilonen E2Na (Trừ kháng ,buff sát thương) , Yelan EQ cấp thủy > Hutao E và bắt đầu trọng kích đến khi hết E)"
            }
        ]
    },



     miko : {
        // 1. Thông tin cơ bản
        name: "Yae Miko",
        subtitle: "Hyper build",
        backgroundColor: "#F4B9B4",
        pcolor: "#B4526E",
        image: "./imgGenShin/BGR/MikoB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Chân ý của Kagura",
            image: "./imgGenShin/wp/Chân-ý.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí đề xuất cho Yae Miko.",
                "Yae Miko mang vai trò hỗ trợ sát thương ngoài sân từ kỹ năng nguyên tố ưu tiên những vũ khí gia tăng ATK và bạo kích .",
                "Ngoài trấn có thể cung cấp lượng lớn chỉ số ATK cũng như bạo kích cho Yae Miko có thể dùng các vũ khí tương tự , có thể dùng (Chương nhạc lang thang) vì cả 3 dòng nội tại đều phù hợp cho miko ."
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "Ảo Tưởng Vụn Vỡ Trong Bóng Tối",
            image: "./imgGenShin/Atifact/AT.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món phù hợp cho cách chơi của Yae Miko",
                "Phương án mạnh nhât cho Yae Miko trong đội hình tinh siêu dẫn , trong các đội hình khác có thể dùng bộ (Đoàn kịch hoàn kim) nếu không có , có thể dùng các bộ ghép ATK và sát thương nguyên tố lôi ."
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng nguyên tố",
                "Kỹ năng nộ",
            
            ],
            images: [
                "./imgGenShin/Skill/MikoS/MikoE.png",
                "./imgGenShin/Skill/MikoS/MikoQ.png"
            ],
            description:
                "Yae Miko chỉ cần nâng kỹ năng nguyên tố để phát huy vai trò hỗ trợ sát thương ngoài sân , kỹ năng nộ và đánh thường nâng theo nhu cầu."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Sandrone tinh siêu dẫn",
                members: [
                    {
                        name: "Yae Miko",
                        image: "./imgGenShin/char/Yae Miko.webp"
                    },
                    {
                        name: "Sandrone",
                        image: "./imgGenShin/char/sandrone.jpg"
                    },
                    {
                        name: "Odette",
                        image: "./imgGenShin/char/odette.jpg"
                    },
                    {
                        name: "QiQi",
                        image: "./imgGenShin/char/qiqi.jpg"
                    }
                ],
                description:
                    "Rottation: Yae Miko 3E > Odette 2E (Trừ kháng ,buff sát thương) , QiQi E/(EQ nếu có C6) > Sandrone CaE-Q-CaE/CaE-CaE"
            }
        ]
    },



    sandrone : {
        // 1. Thông tin cơ bản
        name: "Sandrone",
        subtitle: "Hyper build",
        backgroundColor: "#F7FDF1",
        pcolor: "#960203",
        image: "./imgGenShin/BGR/SandroneB.webp",

        // 2. Vũ khí
        weapon: {
            name: "Muỗng Trà Siêu Việt",
            image: "./imgGenShin/wp/Muỗng-trà.webp",
            title: "Vũ khí phù hợp nhất",
            description: [
                "Vũ khí đề xuất cho Sandrone.",
                "Sandrone là dps trên sân xoay quanh phản ứng tinh siêu dẫn không sử dụng các buff sát thương cộng thêm thông thường , các vũ khí cung cấp bạo kích và ATK đều có thể sử dụng được .",
                "Ngoài trấn có thể cung cấp lượng lớn chỉ số ATK cũng như bạo kích cho Sandrone có thể dùng các vũ khí 5 sao tương tự cung cấp chỉ số ATK và bạo kích .Phương án kiến nghị là (Đường cùng của sói),(Nhát chém cứu rổi)"
            ]
        },

        // 3. Thánh di vật
        artifact: {
            name: "Ảo Tưởng Vụn Vỡ Trong Bóng Tối",
            image: "./imgGenShin/Atifact/AT.webp",
            title: "Thánh di vật phù hợp",
            description: [
                "Bộ 4 món gần như là lựa chọn duy nhất cho Sandrone.",
                "Phương án mạnh nhât cho Sandrone trong đội hình tinh siêu dẫn , nếu không sở hữu bộ 4 món đẹp có thề dùng các bộ ghép tăng ATK.  ."
            ]
        },

        // 4. Thiên phú
        talents: {
            title: "Thứ tự nâng thiên phú",
            priority: [
                "Kỹ năng đánh thường",
                "Kỹ năng nộ",
            
            ],
            images: [
                "./imgGenShin/Skill/SandroneS/SandroneNA.png",
                "./imgGenShin/Skill/SandroneS/SandroneQ.png"
            ],
            description:
                "Cả nộ và đánh thường của Sandrone đều đóng góp lượng lớn sát thương trong lối chơi của Sandrone, kỹ năng nguyên tố nâng theo nhu cầu."
        },

        // 5. Đội hình
        teams: [
            {
                name: "Sandrone tinh siêu dẫn",
                members: [
                    {
                        name: "Sandrone",
                        image: "./imgGenShin/char/sandrone.jpg" 
                    },
                    {
                        name: "Yae Miko",
                        image: "./imgGenShin/char/Yae Miko.webp" 
                    },
                    {
                        name: "Odette",
                        image: "./imgGenShin/char/odette.jpg"
                    },
                    {
                        name: "QiQi",
                        image: "./imgGenShin/char/qiqi.jpg"
                    }
                ],
                description:
                    "Rottation: Yae Miko 3E > Odette 2E (Trừ kháng ,buff sát thương) , QiQi E/(EQ nếu có C6) > Sandrone CaE-Q-CaE/CaE-CaE"
            }
        ]
    },


    











};


   