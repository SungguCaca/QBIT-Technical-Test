// Struktur data IComment
const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];

// Fungsi rekursif untuk menghitung total komentar dan balasannya
function countTotalComments(comments) {
    let totalComments = 0;
    comments.forEach(comment => {
        totalComments++; // Menghitung komentar itu sendiri
        if (comment.replies) {
            totalComments += countTotalComments(comment.replies); // Menambahkan jumlah balasan dari komentar tersebut
        }
    });
    return totalComments;
}

// Menghitung total komentar
const totalComments = countTotalComments(comments);
console.log("Total komentar:", totalComments);
