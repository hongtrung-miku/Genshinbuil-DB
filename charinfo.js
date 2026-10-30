

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
                    "Rottation: Furina EQ(lấy buff) > Xilonen EQ (Trừ kháng ,hồi máu để tích tần náo nhiệt , Yelan EQ cấp thủy > Hutao E và bắt đầu trọng kích đến khi hết E)"
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
                    "Mô tả vai trò từng nhân vật và cách vận hành đội hình."
            }
        ]
    }
};


   