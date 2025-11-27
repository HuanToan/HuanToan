import { Chapter } from './types';

export const TEXTBOOK_DATA: Chapter[] = [
  {
    id: 'chuong-1',
    title: 'Chương I: Đa Thức',
    lessons: [
      {
        id: 'bai-1',
        title: 'Bài 1: Đơn thức',
        theory: [
          '**Đơn thức** là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.',
          '**Đơn thức thu gọn** là đơn thức chỉ gồm tích của một số với các biến, mà mỗi biến đã được nâng lên lũy thừa với số mũ nguyên dương.',
          '**Bậc của đơn thức** có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức đó.',
          '**Hai đơn thức đồng dạng** là hai đơn thức với hệ số khác 0 và có phần biến giống nhau.',
          '**Chú ý**: Số 0 được gọi là đơn thức không. Số thực khác 0 là đơn thức bậc 0.'
        ],
        illustrativeExamples: [
          {
            id: 'ex-ill-1',
            title: 'Nhận biết đơn thức',
            content: 'Trong các biểu thức sau: $2xy$; $-3$; $x+y$; $5x\\sqrt{y}$. Biểu thức nào là đơn thức?',
            explanation: '- $2xy$ và $-3$ là đơn thức.\n- $x+y$ không phải đơn thức (có phép cộng).\n- $5x\\sqrt{y}$ không phải đơn thức (có căn bậc hai của biến).'
          },
          {
            id: 'ex-ill-2',
            title: 'Thu gọn và tìm bậc',
            content: 'Cho đơn thức $A = 5x^2y \\cdot (-2xy^3)$. Thu gọn $A$ và tìm bậc.',
            explanation: 'Ta có: $A = [5 \\cdot (-2)] \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^3) = -10x^3y^4$.\nTổng số mũ là $3 + 4 = 7$. Vậy $A$ có bậc là 7.'
          }
        ],
        exercises: [
          {
            id: 'ex-1',
            question: 'Trong các biểu thức sau, biểu thức nào là đơn thức: $-5x^2y$; $x - 2$; $17z^4$?',
            solution: 'Đơn thức là: $-5x^2y$ và $17z^4$. (Biểu thức $x - 2$ không phải là đơn thức vì có chứa phép trừ).'
          },
          {
            id: 'ex-2',
            question: 'Thu gọn đơn thức: $0.5x^2y \\cdot 4xy^2$',
            solution: '$= (0.5 \\cdot 4) \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^2) = 2x^3y^3$'
          },
          {
            id: 'ex-3-adv',
            question: '(Nâng cao) Cho đơn thức $A = \\left(- \\frac{1}{3} x^2 y^4\\right)^2 \\cdot (9 x y^2)$. Thu gọn $A$ và tính giá trị của $A$ biết $|x| = 1$ và $y = -1$.',
            solution: 'Thu gọn: $A = \\frac{1}{9} x^4 y^8 \\cdot 9 x y^2 = x^5 y^{10}$.\nTại $|x|=1 \\Rightarrow x = \\pm 1$. Vì $y^{10}$ luôn dương và $x$ mũ lẻ ($x^5$) nên ta xét 2 trường hợp:\n- Nếu $x=1, y=-1$: $A = 1^5 \\cdot (-1)^{10} = 1$.\n- Nếu $x=-1, y=-1$: $A = (-1)^5 \\cdot (-1)^{10} = -1$.'
          }
        ],
        quiz: [
          {
            id: 'q1-1',
            question: 'Biểu thức nào sau đây KHÔNG phải là đơn thức?',
            options: ['$2x$', '$x + y$', '$-5xy^2$', '$3$'],
            correctAnswerIndex: 1,
            explanation: 'Đơn thức không chứa phép cộng hoặc trừ. $x + y$ có phép cộng nên là đa thức.',
            level: 'nhan-biet'
          },
          {
            id: 'q1-2',
            question: 'Hệ số của đơn thức $-xyz$ là:',
            options: ['$0$', '$1$', '$-1$', '$xyz$'],
            correctAnswerIndex: 2,
            explanation: '$-xyz$ tương đương với $-1 \\cdot xyz$, nên hệ số là -1.',
            level: 'thong-hieu'
          },
          {
            id: 'q1-3',
            question: 'Bậc của đơn thức $3x^2y^3z$ là bao nhiêu?',
            options: ['$5$', '$6$', '$1$', '$3$'],
            correctAnswerIndex: 1,
            explanation: 'Bậc là tổng số mũ: $2 + 3 + 1 = 6$ (chú ý $z$ là $z^1$).',
            level: 'thong-hieu'
          },
          {
            id: 'q1-4',
            question: 'Thu gọn đơn thức $A = (-2x^2y) \\cdot (\\frac{1}{2}xy^2)$ ta được:',
            options: ['$-x^3y^3$', '$-x^2y^2$', '$x^3y^3$', '$-xy$'],
            correctAnswerIndex: 0,
            explanation: '$(-2 \\cdot \\frac{1}{2}) \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^2) = -1 \\cdot x^3 \\cdot y^3 = -x^3y^3$.',
            level: 'van-dung'
          },
          {
            id: 'q1-5',
            question: 'Cho đơn thức $M = (-3x^2y^3)^2$. Khẳng định nào sau đây đúng về giá trị của $M$?',
            options: ['$M \\le 0$ với mọi $x,y$', '$M \\ge 0$ với mọi $x,y$', '$M > 0$ với mọi $x,y$', '$M = 0$ khi $x=1, y=1$'],
            correctAnswerIndex: 1,
            explanation: '$M = 9x^4y^6$. Vì $x^4 \\ge 0, y^6 \\ge 0$ và $9 > 0$ nên $M \\ge 0$ với mọi $x, y$.',
            level: 'van-dung-cao'
          }
        ]
      },
      {
        id: 'bai-2',
        title: 'Bài 2: Đa thức',
        theory: [
          '**Đa thức** là tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức đó.',
          '**Đa thức thu gọn** là đa thức không còn hai hạng tử nào đồng dạng.',
          '**Bậc của một đa thức** là bậc của hạng tử có bậc cao nhất trong dạng thu gọn của đa thức đó.'
        ],
        illustrativeExamples: [
          {
            id: 'ex-ill-1',
            title: 'Tìm bậc của đa thức',
            content: 'Tìm bậc của đa thức $P = x^5 - 2x^3 + x^5 + 1$.',
            explanation: 'Trước hết ta thu gọn: $P = (x^5 + x^5) - 2x^3 + 1 = 2x^5 - 2x^3 + 1$.\nHạng tử cao nhất là $2x^5$ có bậc 5. Vậy bậc của $P$ là 5.'
          },
          {
            id: 'ex-ill-2',
            title: 'Tính giá trị biểu thức',
            content: 'Tính giá trị của đa thức $A = x^2 - y$ tại $x = 1, y = -1$.',
            explanation: 'Thay $x = 1, y = -1$ vào $A$, ta được: $A = 1^2 - (-1) = 1 + 1 = 2$.'
          }
        ],
        exercises: [
          {
            id: 'ex-1',
            question: 'Tìm bậc của đa thức $P = 3x^4 + \\frac{1}{3}xyz - 3x^4 - \\frac{4}{3}xyz + 2x^2y - 6z$',
            solution: 'Trước hết thu gọn P: $P = (3x^4 - 3x^4) + (\\frac{1}{3}xyz - \\frac{4}{3}xyz) + 2x^2y - 6z = -xyz + 2x^2y - 6z$. Hạng tử $-xyz$ có bậc 3, $2x^2y$ có bậc 3, $-6z$ có bậc 1. Vậy bậc của P là 3.'
          },
          {
            id: 'ex-2-adv',
            question: '(Nâng cao) Tìm đa thức $M$ biết: $M + (x^2 - 4xy + y^2) = 2x^2 - 3xy + 5y^2$. Sau đó tìm giá trị nhỏ nhất của $M$ khi $y=0$.',
            solution: 'Ta có $M = (2x^2 - 3xy + 5y^2) - (x^2 - 4xy + y^2) = x^2 + xy + 4y^2$.\nKhi $y=0$, $M = x^2$. Vì $x^2 \\ge 0$ với mọi $x$, nên giá trị nhỏ nhất của $M$ (khi $y=0$) là 0, đạt được tại $x=0$.'
          }
        ],
        quiz: [
          {
             id: 'q2-1',
             question: 'Đa thức nào sau đây là đa thức 0?',
             options: ['$0$', '$x - x$', '$3 - 3$', 'Tất cả các ý trên đều đúng'],
             correctAnswerIndex: 3,
             explanation: 'Số 0 hoặc biểu thức thu gọn bằng 0 đều được coi là đa thức 0.',
             level: 'nhan-biet'
          },
          {
            id: 'q2-2',
            question: 'Thu gọn đa thức $P = 3x^2y - x^2y + 5$ ta được:',
            options: ['$2x^2y + 5$', '$4x^2y + 5$', '$3x^2y + 5$', '$2x^2y$'],
            correctAnswerIndex: 0,
            explanation: '$3x^2y - x^2y = 2x^2y$. Vậy $P = 2x^2y + 5$.',
            level: 'thong-hieu'
          },
          {
            id: 'q2-3',
            question: 'Bậc của đa thức $Q = x^5 + 3x^3y^3 - x^5 + 1$ là:',
            options: ['$5$', '$6$', '$3$', '$0$'],
            correctAnswerIndex: 1,
            explanation: 'Thu gọn Q: $x^5 - x^5$ hết, còn lại $3x^3y^3 + 1$. Bậc là $3+3 = 6$.',
            level: 'van-dung'
          },
          {
             id: 'q2-4',
             question: 'Cho đa thức $A = x^4 - 2x^2 + 1$. Giá trị nhỏ nhất của đa thức A là:',
             options: ['$1$', '$0$', '$-1$', 'Không xác định'],
             correctAnswerIndex: 1,
             explanation: 'Ta có $A = (x^2 - 1)^2$. Bình phương luôn $\\ge 0$. Dấu bằng xảy ra khi $x^2=1 \\Rightarrow x = \\pm 1$.',
             level: 'van-dung-cao'
          }
        ]
      },
      {
        id: 'bai-3',
        title: 'Bài 3: Phép cộng và phép trừ đa thức',
        theory: [
          'Muốn cộng (hay trừ) hai đa thức, ta nối hai đa thức bằng dấu "$+$" (hay dấu "$-$"), bỏ dấu ngoặc rồi thu gọn các hạng tử đồng dạng.',
          'Phép cộng đa thức có tính chất giao hoán và kết hợp.'
        ],
        illustrativeExamples: [
           {
            id: 'ex-ill-1',
            title: 'Cộng hai đa thức',
            content: 'Cho $M = x^2 + y$ và $N = x^2 - y$. Tính $M + N$.',
            explanation: '$M + N = (x^2 + y) + (x^2 - y) = x^2 + y + x^2 - y = (x^2 + x^2) + (y - y) = 2x^2$.'
          }
        ],
        exercises: [
          {
            id: 'ex-1',
            question: 'Cho $A = 5x^2y + 5x - 3$ và $B = xy - 4x^2y + 5x - 1$. Tính $A + B$.',
            solution: '$A + B = (5x^2y + 5x - 3) + (xy - 4x^2y + 5x - 1) = (5x^2y - 4x^2y) + xy + (5x + 5x) + (-3 - 1) = x^2y + xy + 10x - 4$.'
          }
        ],
        quiz: [
          {
            id: 'q3-1',
            question: 'Tổng của hai đa thức $2x$ và $3x$ là:',
            options: ['$5x$', '$6x$', '$5x^2$', '$x$'],
            correctAnswerIndex: 0,
            explanation: '$2x + 3x = (2+3)x = 5x$.',
            level: 'nhan-biet'
          },
          {
             id: 'q3-2',
             question: 'Cho $A = x + y, B = x - y$. Tính $A - B$.',
             options: ['$2x$', '$2y$', '$0$', '$x^2 - y^2$'],
             correctAnswerIndex: 1,
             explanation: '$A - B = (x + y) - (x - y) = x + y - x + y = 2y$.',
             level: 'thong-hieu'
          },
          {
             id: 'q3-3',
             question: 'Tìm đa thức $M$ biết $M + (x^2-y) = 2x^2 + y$.',
             options: ['$x^2 + 2y$', '$3x^2$', '$x^2$', '$x^2 - 2y$'],
             correctAnswerIndex: 0,
             explanation: '$M = (2x^2 + y) - (x^2 - y) = 2x^2 + y - x^2 + y = x^2 + 2y$.',
             level: 'van-dung'
          },
          {
             id: 'q3-4',
             question: 'Cho $P(x) = ax^2 + bx + c$. Biết $P(0)=1, P(1)=3, P(-1)=1$. Tìm a, b, c.',
             options: ['$a=1, b=0, c=1$', '$a=1, b=1, c=1$', '$a=2, b=0, c=1$', '$a=1, b=2, c=0$'],
             correctAnswerIndex: 1,
             explanation: '$P(0)=1 \\Rightarrow c=1$. $P(1)=a+b+1=3 \\Rightarrow a+b=2$. $P(-1)=a-b+1=1 \\Rightarrow a-b=0 \\Rightarrow a=b$. Vậy $2a=2 \\Rightarrow a=1, b=1$.',
             level: 'van-dung-cao'
          }
        ]
      },
      {
        id: 'bai-4',
        title: 'Bài 4: Phép nhân đa thức',
        theory: [
          '**Nhân đơn thức với đa thức**: $A(B + C) = AB + AC$.',
          '**Nhân đa thức với đa thức**: $(A + B)(C + D) = AC + AD + BC + BD$.',
          'Tích của hai đa thức là một đa thức.'
        ],
        illustrativeExamples: [
          {
            id: 'ex-ill-1',
            title: 'Nhân đa thức',
            content: 'Thực hiện phép tính: $(x + 2)(x - 3)$',
            explanation: '$= x(x) + x(-3) + 2(x) + 2(-3)$\n$= x^2 - 3x + 2x - 6$\n$= x^2 - x - 6$'
          }
        ],
        exercises: [
          {
            id: 'ex-1',
            question: 'Tính: $(xy) \\cdot (x^2 + xy - y^2)$',
            solution: '$= xy \\cdot x^2 + xy \\cdot xy - xy \\cdot y^2 = x^3y + x^2y^2 - xy^3$.'
          }
        ],
        quiz: [
           {
            id: 'q4-1',
            question: 'Kết quả của phép nhân $x(x + 1)$ là:',
            options: ['$x^2 + 1$', '$x^2 + x$', '$2x + 1$', '$x$'],
            correctAnswerIndex: 1,
            explanation: '$x \\cdot x + x \\cdot 1 = x^2 + x$.',
            level: 'nhan-biet'
           },
           {
            id: 'q4-2',
            question: 'Tính $(x - 1)(x + 1)$',
            options: ['$x^2 + 1$', '$x^2 - 1$', '$x^2 - 2x + 1$', '$x^2$'],
            correctAnswerIndex: 1,
            explanation: 'Đây là hằng đẳng thức hiệu hai bình phương: $x^2 - 1^2 = x^2 - 1$.',
            level: 'thong-hieu'
           },
           {
             id: 'q4-3',
             question: 'Hệ số của $x^2$ trong tích $(x-2)(3x+1)$ là:',
             options: ['$3$', '$-5$', '$-6$', '$-2$'],
             correctAnswerIndex: 0,
             explanation: '$(x-2)(3x+1) = 3x^2 + x - 6x - 2 = 3x^2 - 5x - 2$. Hệ số của $x^2$ là 3.',
             level: 'van-dung'
           },
           {
             id: 'q4-4',
             question: 'Tìm x biết $(x+1)(x-2) - (x-1)(x+2) = 4$',
             options: ['$x=0$', '$x=-2$', '$x=2$', 'Không có x thỏa mãn'],
             correctAnswerIndex: 1,
             explanation: '$(x^2-x-2) - (x^2+x-2) = 4 \\Rightarrow -2x = 4 \\Rightarrow x = -2$.',
             level: 'van-dung-cao'
           }
        ]
      },
      {
        id: 'bai-5',
        title: 'Bài 5: Phép chia đa thức cho đơn thức',
        theory: [
          'Đơn thức $A$ chia hết cho đơn thức $B$ nếu biến của $B$ đều là biến của $A$ với số mũ không lớn hơn số mũ của nó trong $A$.',
          'Muốn chia đa thức $A$ cho đơn thức $B$ (trường hợp chia hết), ta chia từng hạng tử của $A$ cho $B$ rồi cộng các kết quả với nhau.'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1',
            question: 'Thực hiện phép chia: $(15x^2y^4 - 4x^3y^3 + 20x^2y) : 5x^2y$',
            solution: '$= 15x^2y^4:5x^2y - 4x^3y^3:5x^2y + 20x^2y:5x^2y = 3y^3 - 0.8xy^2 + 4$.'
          }
        ],
        quiz: [
           {
             id: 'q5-1',
             question: 'Điều kiện để đơn thức $A$ chia hết cho đơn thức $B$ là:',
             options: ['Hệ số của A chia hết cho B', 'Biến của B là biến của A và mũ trong B nhỏ hơn hoặc bằng mũ trong A', 'Mũ của A bằng mũ của B', 'A và B đồng dạng'],
             correctAnswerIndex: 1,
             explanation: 'Định nghĩa phép chia hết của đơn thức.',
             level: 'nhan-biet'
           },
           {
            id: 'q5-2',
            question: 'Kết quả của $(4x^3 + 2x) : 2x$ là:',
            options: ['$2x^2 + 1$', '$2x^2$', '$2x + 1$', '$4x^2 + 1$'],
            correctAnswerIndex: 0,
            explanation: '$4x^3:2x = 2x^2; 2x:2x = 1$. Kết quả: $2x^2 + 1$.',
            level: 'thong-hieu'
           },
           {
             id: 'q5-3',
             question: 'Tìm $n$ (tự nhiên) để phép chia $x^4 : x^n$ thực hiện được:',
             options: ['$n > 4$', '$n \\le 4$', '$n = 0$', '$n \\ge 4$'],
             correctAnswerIndex: 1,
             explanation: 'Số mũ của số bị chia phải lớn hơn hoặc bằng số mũ của số chia.',
             level: 'van-dung'
           }
        ]
      },
      {
        id: 'bai-6',
        title: 'Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu',
        theory: [
          '**Bình phương của một tổng**: $(A + B)^2 = A^2 + 2AB + B^2$',
          '**Bình phương của một hiệu**: $(A - B)^2 = A^2 - 2AB + B^2$',
          '**Hiệu hai bình phương**: $A^2 - B^2 = (A - B)(A + B)$'
        ],
        illustrativeExamples: [
          {
            id: 'ex-ill-1',
            title: 'Tính nhanh',
            content: 'Tính $101^2$',
            explanation: '$101^2 = (100 + 1)^2 = 100^2 + 2 \\cdot 100 \\cdot 1 + 1^2 = 10000 + 200 + 1 = 10201$'
          }
        ],
        exercises: [
          {
            id: 'ex-1',
            question: 'Tính nhanh: $101^2 - 99^2$',
            solution: '$= (101 - 99)(101 + 99) = 2 \\cdot 200 = 400$.'
          }
        ],
        quiz: [
          {
             id: 'q6-1',
             question: 'Công thức nào sau đây là hằng đẳng thức hiệu hai bình phương?',
             options: ['$A^2 - B^2 = (A-B)^2$', '$A^2 - B^2 = (A-B)(A+B)$', '$A^2 - B^2 = A^2 - 2AB + B^2$', '$A^2 - B^2 = (A+B)^2$'],
             correctAnswerIndex: 1,
             explanation: 'Công thức chuẩn SGK.',
             level: 'nhan-biet'
          },
          {
             id: 'q6-2',
             question: 'Khai triển $(x + 3)^2$ ta được:',
             options: ['$x^2 + 9$', '$x^2 + 3x + 9$', '$x^2 + 6x + 9$', '$x^2 + 6x + 6$'],
             correctAnswerIndex: 2,
             explanation: 'Theo hằng đẳng thức: $x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$.',
             level: 'thong-hieu'
          },
          {
             id: 'q6-3',
             question: 'Tính nhanh $55^2 - 45^2$:',
             options: ['$100$', '$1000$', '$10$', '$2025$'],
             correctAnswerIndex: 1,
             explanation: '$(55-45)(55+45) = 10 \\cdot 100 = 1000$.',
             level: 'van-dung'
          },
          {
             id: 'q6-4',
             question: 'Tìm x biết $x^2 - 10x = -25$',
             options: ['$x=5$', '$x=-5$', '$x=0$', '$x=10$'],
             correctAnswerIndex: 0,
             explanation: '$x^2 - 10x + 25 = 0 \\Rightarrow (x-5)^2 = 0 \\Rightarrow x = 5$.',
             level: 'van-dung-cao'
          }
        ]
      },
      {
        id: 'bai-7',
        title: 'Bài 7: Lập phương của một tổng hay một hiệu',
        theory: [
          '**Lập phương của một tổng**: $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$',
          '**Lập phương của một hiệu**: $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1',
            question: 'Khai triển: $(x + 2)^3$',
            solution: '$= x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.'
          }
        ],
        quiz: [
           {
             id: 'q7-1',
             question: 'Công thức khai triển của $(A+B)^3$ là:',
             options: ['$A^3 + B^3$', '$A^3 + 3A^2B + 3AB^2 + B^3$', '$A^3 - 3A^2B + 3AB^2 - B^3$', '$(A+B)(A^2-AB+B^2)$'],
             correctAnswerIndex: 1,
             explanation: 'Công thức lập phương của một tổng.',
             level: 'nhan-biet'
           },
           {
             id: 'q7-2',
             question: '$(x - 1)^3$ bằng:',
             options: ['$x^3 - 1$', '$x^3 - 3x^2 + 3x - 1$', '$x^3 + 3x^2 + 3x + 1$', '$x^3 - 3x - 1$'],
             correctAnswerIndex: 1,
             explanation: 'Theo hằng đẳng thức lập phương của một hiệu.',
             level: 'thong-hieu'
           },
           {
             id: 'q7-3',
             question: 'Viết biểu thức $x^3 + 3x^2 + 3x + 1$ dưới dạng lập phương:',
             options: ['$(x-1)^3$', '$(x+1)^3$', '$(x^2+1)^3$', '$x^3+1$'],
             correctAnswerIndex: 1,
             explanation: 'Nhận dạng hằng đẳng thức ngược.',
             level: 'van-dung'
           }
        ]
      },
      {
        id: 'bai-8',
        title: 'Bài 8: Tổng và hiệu hai lập phương',
        theory: [
          '**Tổng hai lập phương**: $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$',
          '**Hiệu hai lập phương**: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1',
            question: 'Viết $x^3 + 8$ dưới dạng tích',
            solution: '$x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$.'
          }
        ],
        quiz: [
           {
             id: 'q8-1',
             question: 'Phân tích $x^3 - 1$ thành nhân tử:',
             options: ['$(x-1)(x^2+x+1)$', '$(x-1)(x^2-x+1)$', '$(x+1)(x^2-x+1)$', '$(x-1)^3$'],
             correctAnswerIndex: 0,
             explanation: 'Hằng đẳng thức hiệu hai lập phương.',
             level: 'thong-hieu'
           },
           {
             id: 'q8-2',
             question: 'Tính giá trị biểu thức $A = (x-1)(x^2+x+1)$ tại $x=2$:',
             options: ['$9$', '$7$', '$8$', '$6$'],
             correctAnswerIndex: 1,
             explanation: '$A = x^3 - 1$. Tại $x=2, A = 2^3 - 1 = 8 - 1 = 7$.',
             level: 'van-dung'
           }
        ]
      },
      {
        id: 'bai-9',
        title: 'Bài 9: Phân tích đa thức thành nhân tử',
        theory: [
          'Phân tích đa thức thành nhân tử là biến đổi đa thức đó thành một tích của những đa thức.',
          'Các phương pháp thường dùng: đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử.'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1',
            question: 'Phân tích đa thức $x^2 - 2xy$ thành nhân tử',
            solution: '$= x(x - 2y)$.'
          }
        ],
        quiz: [
          {
            id: 'q9-1',
            question: 'Phương pháp nào KHÔNG dùng để phân tích đa thức thành nhân tử?',
            options: ['Đặt nhân tử chung', 'Dùng hằng đẳng thức', 'Chuyển vế đổi dấu', 'Nhóm hạng tử'],
            correctAnswerIndex: 2,
            explanation: 'Chuyển vế đổi dấu là phương pháp giải phương trình, không phải phân tích đa thức.',
            level: 'nhan-biet'
          },
          {
            id: 'q9-2',
            question: 'Nhân tử chung của $2x^2 - 4x$ là:',
            options: ['$2$', '$x$', '$2x$', '$4x$'],
            correctAnswerIndex: 2,
            explanation: '$2x^2 = 2x \\cdot x$ và $4x = 2x \\cdot 2$. Nhân tử chung là $2x$.',
            level: 'thong-hieu'
          },
          {
            id: 'q9-3',
            question: 'Phân tích $x^2 - y^2 + 2x + 2y$ thành nhân tử:',
            options: ['$(x+y)(x-y+2)$', '$(x-y)(x+y+2)$', '$(x+y)^2$', 'Không phân tích được'],
            correctAnswerIndex: 0,
            explanation: '$(x^2-y^2) + (2x+2y) = (x-y)(x+y) + 2(x+y) = (x+y)(x-y+2)$.',
            level: 'van-dung'
          },
          {
            id: 'q9-4',
            question: 'Tìm x biết $x^2(x-3) - 4(x-3) = 0$',
            options: ['$x=3$', '$x=\\pm 2$', '$x=3, x=\\pm 2$', '$x=2, x=3$'],
            correctAnswerIndex: 2,
            explanation: '$(x-3)(x^2-4) = 0 \\Rightarrow (x-3)(x-2)(x+2) = 0$. Các nghiệm là $3, 2, -2$.',
            level: 'van-dung-cao'
          }
        ]
      }
    ]
  },
  {
    id: 'chuong-3',
    title: 'Chương III: Tứ Giác',
    lessons: [
      {
        id: 'bai-10',
        title: 'Bài 10: Tứ giác',
        theory: [
          '**Tứ giác** $ABCD$ là hình gồm 4 đoạn thẳng $AB, BC, CD, DA$ trong đó không có hai đoạn thẳng nào cùng nằm trên một đường thẳng.',
          '**Tứ giác lồi** là tứ giác luôn nằm về một phía của đường thẳng chứa bất kì cạnh nào của tứ giác.',
          '**Định lí**: Tổng các góc của một tứ giác bằng $360^\\circ$.'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1',
            question: 'Cho tứ giác $ABCD$ có góc $A = 60^\\circ, B = 80^\\circ, C = 100^\\circ$. Tính góc $D$?',
            solution: 'Góc $D = 360^\\circ - (A + B + C) = 360^\\circ - (60^\\circ + 80^\\circ + 100^\\circ) = 360^\\circ - 240^\\circ = 120^\\circ$.'
          },
          {
            id: 'ex-2-adv',
            question: '(Nâng cao) Cho tứ giác $ABCD$. Chứng minh rằng tổng độ dài hai đường chéo $AC + BD$ luôn nhỏ hơn chu vi tứ giác nhưng lớn hơn nửa chu vi tứ giác.',
            solution: 'Gọi $O$ là giao điểm hai đường chéo.\n- Xét $\\Delta OAB, \\Delta OBC, \\Delta OCD, \\Delta ODA$: Theo BĐT tam giác, ta có $OA+OB > AB, OB+OC > BC, OC+OD > CD, OD+OA > DA$. Cộng vế với vế ta được $2(AC+BD) > AB+BC+CD+DA \\Rightarrow AC+BD > \\frac{P}{2}$ (P là chu vi).\n- Xét $\\Delta ABC, \\Delta ADC, \\Delta ABD, \\Delta BCD$: $AC < AB+BC, AC < AD+DC, BD < AB+AD, BD < BC+CD$. Cộng vế với vế: $2(AC+BD) < 2(AB+BC+CD+DA) \\Rightarrow AC+BD < P$.'
          }
        ],
        quiz: [
          {
            id: 'q10-1',
            question: 'Tổng 4 góc trong một tứ giác lồi bằng bao nhiêu?',
            options: ['$180^\\circ$', '$360^\\circ$', '$90^\\circ$', '$540^\\circ$'],
            correctAnswerIndex: 1,
            explanation: 'Tổng các góc của một tứ giác luôn bằng $360^\\circ$.',
            level: 'nhan-biet'
          },
          {
             id: 'q10-2',
             question: 'Tứ giác lồi là tứ giác:',
             options: ['Có 4 cạnh bằng nhau', 'Có 4 góc bằng nhau', 'Luôn nằm về một phía của đường thẳng chứa bất kì cạnh nào', 'Có 2 đường chéo bằng nhau'],
             correctAnswerIndex: 2,
             explanation: 'Định nghĩa tứ giác lồi.',
             level: 'thong-hieu'
          },
          {
             id: 'q10-3',
             question: 'Cho tứ giác ABCD có $\\hat{A}=50^\\circ, \\hat{B}=120^\\circ, \\hat{C}=120^\\circ$. Số đo góc D là:',
             options: ['$50^\\circ$', '$70^\\circ$', '$90^\\circ$', '$60^\\circ$'],
             correctAnswerIndex: 1,
             explanation: '$\\hat{D} = 360^\\circ - (50+120+120) = 70^\\circ$.',
             level: 'van-dung'
          }
        ]
      },
      {
        id: 'bai-11',
        title: 'Bài 11: Hình thang cân',
        theory: [
          '**Hình thang** là tứ giác có hai cạnh đối song song.',
          '**Hình thang cân** là hình thang có hai góc kề một đáy bằng nhau.',
          'Tính chất: Trong hình thang cân, hai cạnh bên bằng nhau, hai đường chéo bằng nhau.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
          {
            id: 'q11-1',
            question: 'Hình thang là tứ giác có:',
            options: ['Hai cạnh đối bằng nhau', 'Hai cạnh đối song song', 'Hai góc đối bằng nhau', 'Hai đường chéo bằng nhau'],
            correctAnswerIndex: 1,
            explanation: 'Định nghĩa hình thang.',
            level: 'nhan-biet'
          },
          {
            id: 'q11-2',
            question: 'Hình thang cân có tính chất nào sau đây?',
            options: ['Hai đáy bằng nhau', 'Hai cạnh bên song song', 'Hai đường chéo bằng nhau', 'Có một góc vuông'],
            correctAnswerIndex: 2,
            explanation: 'Hai đường chéo bằng nhau là tính chất đặc trưng của hình thang cân.',
            level: 'thong-hieu'
          },
          {
             id: 'q11-3',
             question: 'Cho hình thang cân ABCD (AB//CD) có $\\hat{A} = 70^\\circ$. Tính $\\hat{C}$.',
             options: ['$70^\\circ$', '$110^\\circ$', '$180^\\circ$', '$90^\\circ$'],
             correctAnswerIndex: 1,
             explanation: 'Vì AB//CD nên $\\hat{A} + \\hat{D} = 180^\\circ$ (trong cùng phía). $\\hat{D} = 110^\\circ$. Vì cân nên $\\hat{C} = \\hat{D} = 110^\\circ$.',
             level: 'van-dung'
          }
        ]
      },
      {
        id: 'bai-12',
        title: 'Bài 12: Hình bình hành',
        theory: [
          '**Hình bình hành** là tứ giác có các cạnh đối song song.',
          'Tính chất: Các cạnh đối bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1-adv',
            question: '(Nâng cao) Cho hình bình hành $ABCD$. Gọi $E, F$ lần lượt là hình chiếu của $A$ và $C$ lên đường chéo $BD$. Chứng minh rằng tứ giác $AECF$ là hình bình hành.',
            solution: 'Xét $\\Delta ADE$ và $\\Delta CBF$: $AD = BC$ (cạnh đối hbh), $\\widehat{ADE} = \\widehat{CBF}$ (so le trong), $\\widehat{AED} = \\widehat{CFB} = 90^\\circ$. Suy ra $\\Delta ADE = \\Delta CBF$ (cạnh huyền - góc nhọn) $\\Rightarrow AE = CF$ và $AE // CF$ (cùng vuông góc BD). Tứ giác có một cặp cạnh đối song song và bằng nhau là hình bình hành.'
          }
        ],
        quiz: [
           {
             id: 'q12-1',
             question: 'Trong hình bình hành, hai đường chéo:',
             options: ['Bằng nhau', 'Vuông góc với nhau', 'Cắt nhau tại trung điểm mỗi đường', 'Là phân giác các góc'],
             correctAnswerIndex: 2,
             explanation: 'Tính chất cơ bản của hình bình hành.',
             level: 'nhan-biet'
           },
           {
             id: 'q12-2',
             question: 'Tứ giác có các cạnh đối bằng nhau là:',
             options: ['Hình thang', 'Hình thang cân', 'Hình bình hành', 'Tứ giác thường'],
             correctAnswerIndex: 2,
             explanation: 'Dấu hiệu nhận biết hình bình hành.',
             level: 'thong-hieu'
           },
           {
             id: 'q12-3',
             question: 'Cho hbh ABCD có $\\hat{A} = 2\\hat{B}$. Tính góc A.',
             options: ['$60^\\circ$', '$120^\\circ$', '$90^\\circ$', '$100^\\circ$'],
             correctAnswerIndex: 1,
             explanation: '$\\hat{A} + \\hat{B} = 180^\\circ \\Rightarrow 2\\hat{B} + \\hat{B} = 180^\\circ \\Rightarrow 3\\hat{B} = 180^\\circ \\Rightarrow \\hat{B}=60^\\circ \\Rightarrow \\hat{A}=120^\\circ$.',
             level: 'van-dung'
           }
        ]
      },
      {
        id: 'bai-13',
        title: 'Bài 13: Hình chữ nhật',
        theory: [
          '**Hình chữ nhật** là tứ giác có 4 góc vuông.',
          'Hình chữ nhật cũng là hình bình hành, hình thang cân.',
          'Tính chất: Hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
          {
            id: 'q13-1',
            question: 'Hình chữ nhật là tứ giác có:',
            options: ['4 cạnh bằng nhau', '4 góc vuông', '2 đường chéo vuông góc', '2 cạnh đối song song'],
            correctAnswerIndex: 1,
            explanation: 'Định nghĩa hình chữ nhật.',
            level: 'nhan-biet'
          },
          {
            id: 'q13-2',
            question: 'Hình bình hành có một góc vuông là:',
            options: ['Hình thoi', 'Hình thang cân', 'Hình chữ nhật', 'Hình vuông'],
            correctAnswerIndex: 2,
            explanation: 'Dấu hiệu nhận biết hình chữ nhật.',
            level: 'thong-hieu'
          },
          {
             id: 'q13-3',
             question: 'Đường trung tuyến ứng với cạnh huyền của một tam giác vuông có độ dài bằng:',
             options: ['Cạnh huyền', 'Nửa cạnh huyền', 'Gấp đôi cạnh huyền', 'Cạnh góc vuông'],
             correctAnswerIndex: 1,
             explanation: 'Tính chất hình chữ nhật áp dụng vào tam giác vuông.',
             level: 'van-dung'
          }
        ]
      },
      {
        id: 'bai-14',
        title: 'Bài 14: Hình thoi và hình vuông',
        theory: [
          '**Hình thoi** là tứ giác có 4 cạnh bằng nhau. Đường chéo vuông góc và là phân giác các góc.',
          '**Hình vuông** là tứ giác có 4 góc vuông và 4 cạnh bằng nhau. Hình vuông có tính chất của hình chữ nhật và hình thoi.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
           {
             id: 'q14-1',
             question: 'Hình thoi là tứ giác có:',
             options: ['4 góc bằng nhau', '4 cạnh bằng nhau', 'Hai đường chéo bằng nhau', '4 góc vuông'],
             correctAnswerIndex: 1,
             explanation: 'Định nghĩa hình thoi.',
             level: 'nhan-biet'
           },
           {
             id: 'q14-2',
             question: 'Hình thoi có hai đường chéo bằng nhau là:',
             options: ['Hình chữ nhật', 'Hình vuông', 'Hình thang', 'Không tồn tại'],
             correctAnswerIndex: 1,
             explanation: 'Hình thoi (các cạnh bằng nhau) + 2 đường chéo bằng nhau (tính chất hình chữ nhật) => Hình vuông.',
             level: 'thong-hieu'
           },
           {
             id: 'q14-3',
             question: 'Hai đường chéo của hình vuông có tính chất nào?',
             options: ['Bằng nhau', 'Vuông góc với nhau', 'Cắt nhau tại trung điểm', 'Tất cả các ý trên'],
             correctAnswerIndex: 3,
             explanation: 'Hình vuông có đầy đủ tính chất của hình chữ nhật và hình thoi.',
             level: 'van-dung'
           }
        ]
      }
    ]
  },
  {
    id: 'chuong-4',
    title: 'Chương IV: Định Lí Thalès',
    lessons: [
      {
        id: 'bai-15',
        title: 'Bài 15: Định lí Thalès trong tam giác',
        theory: [
          '**Định lí Thalès**: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.',
          '**Định lí đảo**: Nếu một đường thẳng cắt hai cạnh của một tam giác và định ra trên hai cạnh này những đoạn thẳng tương ứng tỉ lệ thì đường thẳng đó song song với cạnh còn lại.'
        ],
        illustrativeExamples: [],
        exercises: [
          {
            id: 'ex-1',
            question: 'Cho tam giác $ABC, MN // BC (M \\in AB, N \\in AC)$. Biết $AM=2, MB=3, AN=3$. Tính $NC$?',
            solution: 'Theo định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC} \\Rightarrow \\frac{2}{3} = \\frac{3}{NC} \\Rightarrow NC = \\frac{3 \\cdot 3}{2} = 4.5$.'
          }
        ],
        quiz: [
           {
             id: 'q15-1',
             question: 'Điều kiện để áp dụng định lý Thalès trong tam giác là:',
             options: ['Có đường trung tuyến', 'Có đường phân giác', 'Có đường thẳng song song với một cạnh', 'Tam giác vuông'],
             correctAnswerIndex: 2,
             explanation: 'Định lý Thalès yêu cầu một đường thẳng song song với một cạnh của tam giác.',
             level: 'nhan-biet'
           },
           {
             id: 'q15-2',
             question: 'Cho $\\Delta ABC$, $DE//BC (D \\in AB, E \\in AC)$. Hệ thức nào đúng?',
             options: ['$\\frac{AD}{AB} = \\frac{AE}{EC}$', '$\\frac{AD}{DB} = \\frac{AE}{EC}$', '$\\frac{AD}{DE} = \\frac{AE}{BC}$', '$\\frac{AB}{AD} = \\frac{AC}{DE}$'],
             correctAnswerIndex: 1,
             explanation: 'Định lý Thalès: đoạn tương ứng tỉ lệ.',
             level: 'thong-hieu'
           },
           {
             id: 'q15-3',
             question: 'Cho hình thang ABCD (AB//CD). Đường thẳng song song với hai đáy cắt AD tại E, BC tại F. Khẳng định nào đúng?',
             options: ['$\\frac{AE}{ED} = \\frac{BF}{FC}$', '$\\frac{AE}{AD} = \\frac{BF}{BC}$', '$\\frac{ED}{AD} = \\frac{FC}{BC}$', 'Tất cả đều đúng'],
             correctAnswerIndex: 3,
             explanation: 'Định lý Thalès mở rộng cho hình thang.',
             level: 'van-dung-cao'
           }
        ]
      },
      {
        id: 'bai-16',
        title: 'Bài 16: Đường trung bình của tam giác',
        theory: [
          '**Đường trung bình** của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.',
          'Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
          {
            id: 'q16-1',
            question: 'Đường trung bình của tam giác nối:',
            options: ['Đỉnh với trung điểm cạnh đối diện', 'Hai trung điểm của hai cạnh', 'Đỉnh vuông góc cạnh đối diện', 'Trọng tâm với đỉnh'],
            correctAnswerIndex: 1,
            explanation: 'Định nghĩa đường trung bình.',
            level: 'nhan-biet'
          },
          {
            id: 'q16-2',
            question: 'Đường trung bình của tam giác có tính chất gì?',
            options: ['Bằng cạnh đáy', 'Song song và bằng nửa cạnh đáy', 'Vuông góc với cạnh đáy', 'Đi qua đỉnh đối diện'],
            correctAnswerIndex: 1,
            explanation: 'Song song và bằng 1/2 cạnh tương ứng.',
            level: 'thong-hieu'
          },
          {
            id: 'q16-3',
            question: 'Cho $\\Delta ABC$ có $AB=10$. Gọi M, N lần lượt là trung điểm AC, BC. Độ dài MN là:',
            options: ['$5$', '$10$', '$20$', '$2.5$'],
            correctAnswerIndex: 0,
            explanation: 'MN là đường trung bình ứng với cạnh AB. $MN = AB/2 = 5$.',
            level: 'van-dung'
          }
        ]
      },
      {
        id: 'bai-17',
        title: 'Bài 17: Tính chất đường phân giác của tam giác',
        theory: [
          'Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
          {
            id: 'q17-1',
            question: 'Trong tam giác $ABC$, $AD$ là phân giác của góc $A$ ($D \\in BC$). Tỉ số nào sau đây đúng?',
            options: ['$\\frac{DB}{DC} = \\frac{AB}{AC}$', '$\\frac{DB}{DC} = \\frac{AC}{AB}$', '$\\frac{DB}{AB} = \\frac{DC}{AC}$', '$\\frac{AD}{AB} = \\frac{AC}{DC}$'],
            correctAnswerIndex: 0,
            explanation: 'Tính chất đường phân giác: tỉ số hai đoạn trên cạnh đáy bằng tỉ số hai cạnh bên tương ứng.',
            level: 'nhan-biet'
          },
          {
            id: 'q17-2',
            question: 'Cho $\\Delta ABC$ có AB=3, AC=6, phân giác AD ($D \\in BC$). Tỉ số $\\frac{DB}{DC}$ là:',
            options: ['$2$', '$\\frac{1}{2}$', '$3$', '$1$'],
            correctAnswerIndex: 1,
            explanation: '$\\frac{DB}{DC} = \\frac{AB}{AC} = \\frac{3}{6} = \\frac{1}{2}$.',
            level: 'thong-hieu'
          }
        ]
      }
    ]
  },
  {
    id: 'chuong-5',
    title: 'Chương V: Dữ Liệu và Biểu Đồ',
    lessons: [
      {
        id: 'bai-18',
        title: 'Bài 18: Thu thập và phân loại dữ liệu',
        theory: [
          'Có nhiều phương pháp thu thập dữ liệu: quan sát, làm thí nghiệm, lập phiếu hỏi, thu thập từ nguồn có sẵn.',
          'Dữ liệu được phân thành: Dữ liệu là số (số liệu) và dữ liệu không là số.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
           {
             id: 'q18-1',
             question: 'Phương pháp nào là phương pháp thu thập dữ liệu?',
             options: ['Quan sát', 'Phỏng vấn', 'Thu thập từ internet', 'Tất cả các ý trên'],
             correctAnswerIndex: 3,
             explanation: 'Tất cả đều là cách lấy dữ liệu.',
             level: 'nhan-biet'
           },
           {
             id: 'q18-2',
             question: 'Dữ liệu nào sau đây là số liệu?',
             options: ['Màu sắc ưa thích', 'Nơi sinh', 'Chiều cao của học sinh', 'Xếp loại học lực'],
             correctAnswerIndex: 2,
             explanation: 'Chiều cao là con số đo đạc được, các dữ liệu khác là định tính.',
             level: 'thong-hieu'
           }
        ]
      },
      {
        id: 'bai-19',
        title: 'Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ',
        theory: [
          'Có thể biểu diễn dữ liệu bằng bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép, biểu đồ hình quạt tròn, biểu đồ đoạn thẳng.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
          {
            id: 'q19-1',
            question: 'Loại biểu đồ nào thể hiện tỉ lệ phần trăm tốt nhất?',
            options: ['Biểu đồ cột', 'Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt tròn', 'Biểu đồ tranh'],
            correctAnswerIndex: 2,
            explanation: 'Biểu đồ quạt tròn thường dùng để thể hiện cơ cấu/tỉ lệ.',
            level: 'nhan-biet'
          },
          {
            id: 'q19-2',
            question: 'Để biểu diễn sự thay đổi của một đại lượng theo thời gian, ta thường dùng:',
            options: ['Biểu đồ cột', 'Biểu đồ tranh', 'Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt'],
            correctAnswerIndex: 2,
            explanation: 'Biểu đồ đoạn thẳng thể hiện tốt nhất xu hướng thay đổi.',
            level: 'thong-hieu'
          }
        ]
      },
      {
        id: 'bai-20',
        title: 'Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ',
        theory: [
          'Đọc và phân tích biểu đồ giúp ta nắm bắt thông tin nhanh chóng, so sánh và đánh giá xu hướng của dữ liệu.'
        ],
        illustrativeExamples: [],
        exercises: [],
        quiz: [
           {
             id: 'q20-1',
             question: 'Mục đích chính của việc phân tích biểu đồ là gì?',
             options: ['Để vẽ đẹp hơn', 'Để nắm bắt thông tin và ra quyết định', 'Để tính toán phức tạp', 'Để học thuộc lòng'],
             correctAnswerIndex: 1,
             explanation: 'Phân tích giúp hiểu dữ liệu để đưa ra nhận định đúng.',
             level: 'nhan-biet'
           }
        ]
      }
    ]
  }
];