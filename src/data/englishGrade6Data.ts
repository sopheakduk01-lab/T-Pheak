export interface EnglishVocabularyItem {
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  meaningKh: string;
  exampleSentence: string;
  exampleTranslationKh: string;
  audioPrompt?: string;
}

export interface ConversationLine {
  speaker: string;
  text: string;
  translationKh: string;
  avatar: string;
}

export interface ConversationBlock {
  title?: string;
  lines: ConversationLine[];
}

export interface GrammarExample {
  question?: string;
  answer: string;
  note?: string;
}

export interface GrammarPracticeExercise {
  instruction: string;
  prompt: string;
  options?: string[];
  answer: string;
}

export interface LanguageFocusSection {
  grammarTopic: string;
  rule: string;
  formula?: string;
  examples: GrammarExample[];
  practiceExercises: GrammarPracticeExercise[];
}

export interface ReadingQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface ReadingSection {
  title: string;
  passage: string;
  questions: ReadingQuestion[];
}

export interface SpeakingSection {
  instruction: string;
  modelDialogue: { speaker: string; text: string; translationKh: string }[];
  prompts: string[];
}

export interface WritingTask {
  prompt: string;
  answer: string;
}

export interface WritingSection {
  instruction: string;
  wordBank?: string[];
  tasks: WritingTask[];
}

export interface RememberSection {
  vocabList: string[];
  grammarSummary: string;
}

export interface EnglishLessonUnit {
  id: number;
  unitNumber: number;
  chapterId: number;
  chapterTitle: string;
  unitTitle: string;
  titleEn: string;
  titleKh: string;
  subtitleKh: string;
  pages: string;
  icon: string;
  grammarFocusEn: string;
  grammarFocusKh: string;
  spellingWords: string[];
  vocabulary: EnglishVocabularyItem[];
  conversations: ConversationBlock[];
  dialogueEn: { speaker: string; text: string; translationKh: string }[];
  languageFocus: LanguageFocusSection;
  reading: ReadingSection;
  speaking: SpeakingSection;
  writing: WritingSection;
  remember: RememberSection;
  practiceQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanationKh: string;
  }[];
}

export interface EnglishChapter {
  id: number;
  titleEn: string;
  titleKh: string;
  unitsCount: number;
  colorTheme: string;
}

export const ENGLISH_GRADE_6_CHAPTERS: EnglishChapter[] = [
  { id: 1, titleEn: 'Chapter 1: Back to School & Friends', titleKh: 'ជំពូកទី១ ៖ ត្រឡប់មកសាលា និងមិត្តភក្តិ', unitsCount: 3, colorTheme: 'indigo' },
  { id: 2, titleEn: 'Chapter 2: Daily Routines & Hobbies', titleKh: 'ជំពូកទី២ ៖ ទម្លាប់ប្រចាំថ្ងៃ និងចំណង់ចំណូលចិត្ត', unitsCount: 3, colorTheme: 'emerald' },
  { id: 3, titleEn: 'Chapter 3: Food, Health & Nutrition', titleKh: 'ជំពូកទី៣ ៖ អាហារ សុខភាព និងអាហារូបត្ថម្ភ', unitsCount: 3, colorTheme: 'amber' },
  { id: 4, titleEn: 'Chapter 4: Nature, Weather & Seasons', titleKh: 'ជំពូកទី៤ ៖ ធម្មជាតិ អាកាសធាតុ និងរដូវកាល', unitsCount: 3, colorTheme: 'sky' },
];

export const ENGLISH_GRADE_6_UNITS: EnglishLessonUnit[] = [
  {
    id: 1,
    unitNumber: 1,
    chapterId: 1,
    chapterTitle: 'Chapter 1: Back to School & Friends',
    unitTitle: 'Meeting New Classmates',
    titleEn: 'Unit 1: Meeting New Classmates',
    titleKh: 'មេរៀនទី១ ៖ ជួបមិត្តរួមថ្នាក់ថ្មី',
    subtitleKh: 'ការស្វាគមន៍ និងការណែនាំខ្លួនឯងជាភាសាអង់គ្លេស',
    pages: 'ទំព័រ ៦-១១',
    icon: '🎒',
    grammarFocusEn: 'Present Simple tense (Verb to be: am, is, are)',
    grammarFocusKh: 'កិរិយាសព្ទ To Be ក្នុងបច្ចុប្បន្នកាលធម្មតា',
    spellingWords: ['Classmate', 'Welcome', 'Introduce', 'Student', 'Teacher', 'Friend'],
    vocabulary: [
      { word: 'Classmate', phonetic: '/ˈklɑːsmeɪt/', partOfSpeech: 'noun', meaningKh: 'មិត្តរួមថ្នាក់', exampleSentence: 'Thida is my friendly classmate.', exampleTranslationKh: 'ធីតាគឺជាមិត្តរួមថ្នាក់រួសរាយរបស់ខ្ញុំ។' },
      { word: 'Welcome', phonetic: '/ˈwelkəm/', partOfSpeech: 'verb/noun', meaningKh: 'ស្វាគមន៍', exampleSentence: 'Welcome to our school!', exampleTranslationKh: 'សូមស្វាគមន៍មកកាន់សាលារបស់ពួកយើង!' },
      { word: 'Introduce', phonetic: '/ˌɪntrəˈdjuːs/', partOfSpeech: 'verb', meaningKh: 'ណែនាំ (ខ្លួន/អ្នកដទៃ)', exampleSentence: 'Please introduce yourself to the class.', exampleTranslationKh: 'សូមណែនាំខ្លួនរបស់អ្នកដល់ថ្នាក់រៀន។' },
      { word: 'Student', phonetic: '/ˈstjuːdnt/', partOfSpeech: 'noun', meaningKh: 'សិស្ស', exampleSentence: 'We are Grade 6 students.', exampleTranslationKh: 'ពួកយើងជាសិស្សថ្នាក់ទី ៦។' },
      { word: 'Friendly', phonetic: '/ˈfrendli/', partOfSpeech: 'adj', meaningKh: 'រួសរាយរាក់ទាក់', exampleSentence: 'Our teacher is very friendly.', exampleTranslationKh: 'លោកគ្រូអ្នកគ្រូរបស់យើងរួសរាយណាស់។' },
    ],
    conversations: [
      {
        title: 'Greeting and Introductions',
        lines: [
          { speaker: 'Sokha', text: 'Hello! My name is Sokha. What is your name?', translationKh: 'សួស្តី! ខ្ញុំឈ្មោះសុខា។ តើអ្នកឈ្មោះអ្វី?', avatar: '👦' },
          { speaker: 'Thida', text: 'Hi Sokha! I am Thida. Nice to meet you.', translationKh: 'សួស្តីសុខា! ខ្ញុំឈ្មោះធីតា។ រីករាយដែលបានស្គាល់អ្នក។', avatar: '👧' },
          { speaker: 'Sokha', text: 'Nice to meet you too! Which grade are you in?', translationKh: 'រីករាយដែលបានស្គាល់អ្នកដូចគ្នា! តើអ្នករៀនថ្នាក់ទីប៉ុន្មាន?', avatar: '👦' },
          { speaker: 'Thida', text: 'I am in Grade 6A. We are classmates!', translationKh: 'ខ្ញុំរៀនថ្នាក់ទី ៦A។ ពួកយើងជាមិត្តរួមថ្នាក់នឹងគ្នា!', avatar: '👧' },
        ],
      },
    ],
    dialogueEn: [
      { speaker: 'Sokha', text: 'Hello! My name is Sokha. What is your name?', translationKh: 'សួស្តី! ខ្ញុំឈ្មោះសុខា។ តើអ្នកឈ្មោះអ្វី?' },
      { speaker: 'Thida', text: 'Hi Sokha! I am Thida. Nice to meet you.', translationKh: 'សួស្តីសុខា! ខ្ញុំឈ្មោះធីតា។ រីករាយដែលបានស្គាល់អ្នក។' },
      { speaker: 'Sokha', text: 'Nice to meet you too! Which grade are you in?', translationKh: 'រីករាយដែលបានស្គាល់អ្នកដូចគ្នា! តើអ្នករៀនថ្នាក់ទីប៉ុន្មាន?' },
      { speaker: 'Thida', text: 'I am in Grade 6A. We are classmates!', translationKh: 'ខ្ញុំរៀនថ្នាក់ទី ៦A។ ពួកយើងជាមិត្តរួមថ្នាក់នឹងគ្នា!' },
    ],
    languageFocus: {
      grammarTopic: 'Verb "to be" (am, is, are) in Present Simple',
      rule: 'ប្រើ am ជាមួយ I, ប្រើ is ជាមួយ He/She/It (ឯកវចនៈ), និងប្រើ are ជាមួយ We/You/They (ពហុវចនៈ)។',
      formula: 'Subject + am / is / are + Complement (Noun/Adjective)',
      examples: [
        { question: 'What is your name?', answer: 'My name is Dara.', note: 'Subject: My name (singular)' },
        { question: 'Who are they?', answer: 'They are my new classmates.', note: 'Subject: They (plural)' },
        { question: 'Are you in Grade 6?', answer: 'Yes, I am.', note: 'Short answer' },
      ],
      practiceExercises: [
        { instruction: 'Choose the correct form of "be"', prompt: 'I _____ very happy to meet you today.', options: ['am', 'is', 'are', 'be'], answer: 'am' },
        { instruction: 'Choose the correct form of "be"', prompt: 'Sokha and Dara _____ good friends.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
        { instruction: 'Choose the correct form of "be"', prompt: 'She _____ our new English teacher.', options: ['am', 'is', 'are', 'be'], answer: 'is' },
      ],
    },
    reading: {
      title: 'Our First Day in Grade 6',
      passage: 'Today is Monday. It is the first day of school. Sokha walks to school with his friends. The schoolyard is full of cheerful students. Sokha meets Thida near the flagpole. They are both in Grade 6A with Teacher Vanna. They feel excited to learn new English lessons together.',
      questions: [
        { question: 'What day is it today?', options: ['Monday', 'Tuesday', 'Friday', 'Sunday'], answer: 'Monday', explanation: 'The text states: "Today is Monday. It is the first day of school."' },
        { question: 'Who is their teacher in Grade 6A?', options: ['Teacher Vanna', 'Teacher Bopha', 'Teacher Dara', 'Teacher Sok'], answer: 'Teacher Vanna', explanation: 'They are with Teacher Vanna.' },
        { question: 'Where does Sokha meet Thida?', options: ['Near the flagpole', 'In the library', 'At home', 'In the market'], answer: 'Near the flagpole', explanation: 'Sokha meets Thida near the flagpole.' },
      ],
    },
    speaking: {
      instruction: 'អនុវត្តសន្ទនាជាមួយមិត្តរួមថ្នាក់ដើម្បីណែនាំខ្លួន និងសាកសួរឈ្មោះ',
      modelDialogue: [
        { speaker: 'A', text: 'Hello, my name is Bopha. What is your name?', translationKh: 'សួស្តី ខ្ញុំឈ្មោះបុប្ផា។ តើអ្នកឈ្មោះអ្វី?' },
        { speaker: 'B', text: 'Hi Bopha, I am Veasna. Nice to meet you.', translationKh: 'សួស្តីបុប្ផា ខ្ញុំឈ្មោះវាសនា។ រីករាយដែលបានស្គាល់។' },
      ],
      prompts: [
        'ណែនាំឈ្មោះ អាយុ និងថ្នាក់រៀនរបស់អ្នក',
        'សួរមិត្តភក្តិអំពីមុខវិជ្ជាដែលគាត់ចូលចិត្ត',
        'ស្វាគមន៍មិត្តភក្តិដែលទើបមកដល់ថ្នាក់រៀនថ្មី',
      ],
    },
    writing: {
      instruction: 'បំពេញប្រយោគណែនាំខ្លួនជាភាសាអង់គ្លេស',
      wordBank: ['student', 'grade', 'name', 'school', 'classmate'],
      tasks: [
        { prompt: 'My _____ is Sokha.', answer: 'name' },
        { prompt: 'I am a _____ at Samaki Primary School.', answer: 'student' },
        { prompt: 'I study in _____ 6A.', answer: 'grade' },
      ],
    },
    remember: {
      vocabList: ['Classmate', 'Welcome', 'Introduce', 'Student', 'Friendly'],
      grammarSummary: 'I am, He/She/It is, We/You/They are (Verb To Be in Present Simple)',
    },
    practiceQuestions: [
      { question: 'Complete: "Hello, I _____ a Grade 6 student."', options: ['am', 'is', 'are', 'be'], correctIndex: 0, explanationKh: 'ប្រធាន "I" ត្រូវប្រើជាមួយកិរិយាសព្ទ "am"។' },
      { question: 'Which word means "មិត្តរួមថ្នាក់"?', options: ['Teacher', 'Classmate', 'Principal', 'Doctor'], correctIndex: 1, explanationKh: '"Classmate" មានន័យថាមិត្តរួមថ្នាក់។' },
    ],
  },
  {
    id: 2,
    unitNumber: 2,
    chapterId: 1,
    chapterTitle: 'Chapter 1: Back to School & Friends',
    unitTitle: 'Telling the Time & School Supplies',
    titleEn: 'Unit 2: Telling the Time & School Supplies',
    titleKh: 'មេរៀនទី២ ៖ ការមើលម៉ោង និងសម្ភារសិក្សា',
    subtitleKh: 'ការសួរសុខទុក្ខ ការមើលម៉ោង និងសម្ភារក្នុងថ្នាក់រៀន',
    pages: 'ទំព័រ ១២-១៧',
    icon: '⏰',
    grammarFocusEn: 'Telling time ("What time is it?") & Prepositions of time (at, in, on)',
    grammarFocusKh: 'ការប្រាប់ពេលវេលា និងធ្នាក់ At, In, On',
    spellingWords: ['O\'clock', 'Quarter', 'Half', 'Textbook', 'Ruler', 'Pencil'],
    vocabulary: [
      { word: 'O\'clock', phonetic: '/əˈklɒk/', partOfSpeech: 'adv', meaningKh: 'ម៉ោងគត់', exampleSentence: 'It is seven o\'clock in the morning.', exampleTranslationKh: 'វាជាម៉ោង ៧ គត់នៅពេលព្រឹក។' },
      { word: 'Textbook', phonetic: '/ˈtekstbʊk/', partOfSpeech: 'noun', meaningKh: 'សៀវភៅពុម្ព', exampleSentence: 'Open your English textbook to page 12.', exampleTranslationKh: 'បើកសៀវភៅពុម្ពភាសាអង់គ្លេសទំព័រទី ១២។' },
      { word: 'Ruler', phonetic: '/ˈruːlə(r)/', partOfSpeech: 'noun', meaningKh: 'បន្ទាត់', exampleSentence: 'I draw straight lines with a ruler.', exampleTranslationKh: 'ខ្ញុំគូសបន្ទាត់ត្រង់ជាមួយបន្ទាត់។' },
      { word: 'Quarter', phonetic: '/ˈkwɔːtə(r)/', partOfSpeech: 'noun', meaningKh: '១៥ នាទី (មួយភាគបួន)', exampleSentence: 'It is a quarter past seven.', exampleTranslationKh: 'ម៉ោង ៧ កន្លះដប់ប្រាំនាទី។' },
      { word: 'Schedule', phonetic: '/ˈʃedjuːl/', partOfSpeech: 'noun', meaningKh: 'កាលវិភាគ', exampleSentence: 'Check our school timetable schedule.', exampleTranslationKh: 'ពិនិត្យមើលកាលវិភាគសាលារបស់យើង។' },
    ],
    conversations: [
      {
        title: 'Asking the Time at School',
        lines: [
          { speaker: 'Dara', text: 'Excuse me, Sokha. What time is it now?', translationKh: 'អធ្យាស្រ័យសុខា! តើឥឡូវនេះម៉ោងប៉ុន្មានហើយ?', avatar: '👦' },
          { speaker: 'Sokha', text: 'It is seven o\'clock. School starts in fifteen minutes.', translationKh: 'ម៉ោង ៧ គត់ហើយ។ សាលានឹងចាប់ផ្តើមក្នុង ១៥ នាទីទៀត។', avatar: '🧒' },
          { speaker: 'Dara', text: 'Thank you! Do you have a ruler in your bag?', translationKh: 'អរគុណ! តើអ្នកមានបន្ទាត់ក្នុងកាតាបទេ?', avatar: '👦' },
          { speaker: 'Sokha', text: 'Yes, I do. Here you are.', translationKh: 'បាទ មាន។ នេះនែ៎។', avatar: '🧒' },
        ],
      },
    ],
    dialogueEn: [
      { speaker: 'Dara', text: 'Excuse me, Sokha. What time is it now?', translationKh: 'អធ្យាស្រ័យសុខា! តើឥឡូវនេះម៉ោងប៉ុន្មានហើយ?' },
      { speaker: 'Sokha', text: 'It is seven o\'clock. School starts in fifteen minutes.', translationKh: 'ម៉ោង ៧ គត់ហើយ។ សាលានឹងចាប់ផ្តើមក្នុង ១៥ នាទីទៀត។' },
    ],
    languageFocus: {
      grammarTopic: 'Asking and telling time (What time is it? It is...)',
      rule: 'ប្រើ "What time is it?" ដើម្បីសួរម៉ោង និងឆ្លើយដោយ "It is + [ម៉ោង] + o\'clock / past / to"។ ប្រើធ្នាក់ "at" សម្រាប់ពេលវេលាជាក់លាក់។',
      formula: 'What time is it? -> It is [time] | at + [exact time]',
      examples: [
        { question: 'What time is it?', answer: 'It is 7:00 (seven o\'clock).', note: 'Exact hour' },
        { question: 'When does class begin?', answer: 'Class begins at 7:30 a.m.', note: 'Preposition "at"' },
      ],
      practiceExercises: [
        { instruction: 'Choose the correct preposition', prompt: 'Our school bell rings _____ 7 o\'clock.', options: ['at', 'in', 'on', 'by'], answer: 'at' },
        { instruction: 'Choose the correct response', prompt: 'What time is it? (7:30)', options: ['It is half past seven.', 'It is seven o\'clock.', 'It is quarter to seven.'], answer: 'It is half past seven.' },
      ],
    },
    reading: {
      title: 'Our School Morning Schedule',
      passage: 'At Samaki Primary School, classes start at 7:00 a.m. Students arrive early with their backpacks, pencils, and textbooks. At 7:00, all students stand in front of the flag to sing the National Anthem. At 9:30, they have a short break for healthy snacks and playground games.',
      questions: [
        { question: 'What time do classes start?', options: ['7:00 a.m.', '8:00 a.m.', '6:30 a.m.', '9:30 a.m.'], answer: '7:00 a.m.', explanation: 'Classes start at 7:00 a.m.' },
        { question: 'What do students do at 7:00 a.m.?', options: ['Sing the National Anthem', 'Eat lunch', 'Go home', 'Play football'], answer: 'Sing the National Anthem', explanation: 'They stand in front of the flag and sing the Anthem.' },
      ],
    },
    speaking: {
      instruction: 'អនុវត្តសួរម៉ោង និងសួររកសម្ភារសិក្សាជាមួយមិត្តភក្តិ',
      modelDialogue: [
        { speaker: 'A', text: 'What time is it now?', translationKh: 'តើឥឡូវម៉ោងប៉ុន្មានហើយ?' },
        { speaker: 'B', text: 'It is eight o\'clock sharp.', translationKh: 'ម៉ោង ៨ គត់។' },
      ],
      prompts: [
        'សួរមិត្តភក្តិថាតើម៉ោងប៉ុន្មានគាត់មកដល់សាលា',
        'សុំខ្ចីជ័រលុប ឬបន្ទាត់ពីមិត្តរួមតុ',
      ],
    },
    writing: {
      instruction: 'បំពេញប្រយោគទាក់ទងនឹងពេលវេលា និងសម្ភារសិក្សា',
      wordBank: ['ruler', 'o\'clock', 'textbook', 'pencil'],
      tasks: [
        { prompt: 'It is seven _____ in the morning.', answer: 'o\'clock' },
        { prompt: 'I use a _____ to write in my notebook.', answer: 'pencil' },
      ],
    },
    remember: {
      vocabList: ['O\'clock', 'Textbook', 'Ruler', 'Quarter', 'Schedule'],
      grammarSummary: 'What time is it? It is [time]. Preposition "at" + time (e.g., at 7 o\'clock).',
    },
    practiceQuestions: [
      { question: 'What do you use to write in your notebook?', options: ['Pen', 'Eraser', 'Ruler', 'Backpack'], correctIndex: 0, explanationKh: '"Pen" គឺប៊ិចសម្រាប់សរសេរ។' },
    ],
  },
  {
    id: 3,
    unitNumber: 3,
    chapterId: 2,
    chapterTitle: 'Chapter 2: Daily Routines & Hobbies',
    unitTitle: 'Daily Routines & Activities',
    titleEn: 'Unit 3: Daily Routines & Activities',
    titleKh: 'មេរៀនទី៣ ៖ ទម្លាប់ប្រចាំថ្ងៃ និងសកម្មភាព',
    subtitleKh: 'ការរៀបរាប់ពីសកម្មភាពប្រចាំថ្ងៃពីព្រឹកដល់ល្ងាច',
    pages: 'ទំព័រ ១៨-២៣',
    icon: '☀️',
    grammarFocusEn: 'Present Simple for routines (I wake up, She brushes her teeth)',
    grammarFocusKh: 'បច្ចុប្បន្នកាលធម្មតាសម្រាប់ទម្លាប់ប្រចាំថ្ងៃ (កិរិយាសព្ទថែម s/es)',
    spellingWords: ['Morning', 'Brush', 'Breakfast', 'Exercise', 'Shower', 'Homework'],
    vocabulary: [
      { word: 'Routine', phonetic: '/ruːˈtiːn/', partOfSpeech: 'noun', meaningKh: 'ទម្លាប់ប្រចាំថ្ងៃ', exampleSentence: 'My morning routine starts at 6 a.m.', exampleTranslationKh: 'ទម្លាប់ពេលព្រឹករបស់ខ្ញុំចាប់ផ្តើមនៅម៉ោង ៦ ព្រឹក។' },
      { word: 'Brush', phonetic: '/brʌʃ/', partOfSpeech: 'verb', meaningKh: 'ដុស (ធ្មេញ)', exampleSentence: 'I brush my teeth twice a day.', exampleTranslationKh: 'ខ្ញុំដុសធ្មេញពីរដងក្នុងមួយថ្ងៃ។' },
      { word: 'Breakfast', phonetic: '/ˈbrekfəst/', partOfSpeech: 'noun', meaningKh: 'អាហារពេលព្រឹក', exampleSentence: 'We eat rice and soup for breakfast.', exampleTranslationKh: 'យើងហូបបាយ និងសម្លសម្រាប់អាហារពេលព្រឹក។' },
      { word: 'Homework', phonetic: '/ˈhəʊmwɜːk/', partOfSpeech: 'noun', meaningKh: 'កិច្ចការផ្ទះ', exampleSentence: 'I do my homework every evening.', exampleTranslationKh: 'ខ្ញុំធ្វើកិច្ចការផ្ទះរៀងរាល់ល្ងាច។' },
    ],
    conversations: [
      {
        title: 'Talking about Morning Routines',
        lines: [
          { speaker: 'Sophea', text: 'What time do you usually wake up, Bopha?', translationKh: 'តើអ្នកតែងតែភ្ញាក់ពីគេងនៅម៉ោងប៉ុន្មាន បុប្ផា?', avatar: '👧' },
          { speaker: 'Bopha', text: 'I always wake up at 5:30 a.m. Then I wash my face and brush my teeth.', translationKh: 'ខ្ញុំតែងតែភ្ញាក់នៅម៉ោង ៥:៣០ ព្រឹក។ បន្ទាប់មកខ្ញុំលុបមុខ និងដុសធ្មេញ។', avatar: '👩' },
          { speaker: 'Sophea', text: 'Do you eat breakfast before going to school?', translationKh: 'តើអ្នកញ៉ាំអាហារពេលព្រឹកមុនពេលទៅសាលាទេ?', avatar: '👧' },
          { speaker: 'Bopha', text: 'Yes, my mother prepares healthy breakfast for me at 6:15.', translationKh: 'ចាស ម្តាយខ្ញុំរៀបចំអាហារពេលព្រឹកឱ្យខ្ញុំនៅម៉ោង ៦:១៥។', avatar: '👩' },
        ],
      },
    ],
    dialogueEn: [
      { speaker: 'Sophea', text: 'What time do you usually wake up, Bopha?', translationKh: 'តើអ្នកតែងតែភ្ញាក់ពីគេងនៅម៉ោងប៉ុន្មាន បុប្ផា?' },
      { speaker: 'Bopha', text: 'I always wake up at 5:30 a.m. Then I wash my face and brush my teeth.', translationKh: 'ខ្ញុំតែងតែភ្ញាក់នៅម៉ោង ៥:៣០ ព្រឹក។ បន្ទាប់មកខ្ញុំលុបមុខ និងដុសធ្មេញ។' },
    ],
    languageFocus: {
      grammarTopic: 'Present Simple tense for habitual actions',
      rule: 'ប្រើកិរិយាសព្ទដើមសម្រាប់ I/You/We/They; ថែម -s ឬ -es លើកិរិយាសព្ទសម្រាប់ He/She/It។',
      formula: 'I/You/We/They + Verb(base) | He/She/It + Verb(s/es)',
      examples: [
        { question: 'What do you do in the morning?', answer: 'I wash my face and brush my teeth.', note: 'Subject: I' },
        { question: 'What does Bopha do?', answer: 'She walks to school every morning.', note: 'Subject: She (walks)' },
      ],
      practiceExercises: [
        { instruction: 'Choose the correct verb form', prompt: 'Sophea _____ her homework every evening.', options: ['do', 'does', 'doing', 'done'], answer: 'does' },
        { instruction: 'Choose the correct verb form', prompt: 'We _____ breakfast at 6:30 a.m.', options: ['eat', 'eats', 'eating', 'ate'], answer: 'eat' },
      ],
    },
    reading: {
      title: 'Bopha\'s Daily Life',
      passage: 'Bopha is a hardworking Grade 6 student in Battambang. Every weekday, she gets up early. After brushing her teeth and eating breakfast, she rides her bicycle to school. In the afternoon, she helps her parents water the vegetables and feeds the chickens. At night, she reads English storybooks before sleeping.',
      questions: [
        { question: 'How does Bopha go to school?', options: ['By bicycle', 'On foot', 'By car', 'By boat'], answer: 'By bicycle', explanation: 'She rides her bicycle to school.' },
        { question: 'What does she do in the afternoon?', options: ['Helps her parents', 'Watches TV', 'Sleeps', 'Plays games'], answer: 'Helps her parents', explanation: 'She helps water vegetables and feed chickens.' },
      ],
    },
    speaking: {
      instruction: 'រៀបរាប់ពីទម្លាប់ប្រចាំថ្ងៃរបស់អ្នកពីព្រឹកដល់យប់ទៅកាន់មិត្តភក្តិ',
      modelDialogue: [
        { speaker: 'A', text: 'What do you do after school?', translationKh: 'តើអ្នកធ្វើអ្វីបន្ទាប់ពីចេញពីសាលា?' },
        { speaker: 'B', text: 'I do my homework and play football with my brothers.', translationKh: 'ខ្ញុំធ្វើកិច្ចការផ្ទះ និងលេងបាល់ទាត់ជាមួយបងប្អូន។' },
      ],
      prompts: [
        'រៀបរាប់ពីសកម្មភាព ៣ យ៉ាងដែលអ្នកធ្វើរាល់ព្រឹក',
        'សួរមិត្តភក្តិអំពីម៉ោងចូលគេងរបស់គាត់',
      ],
    },
    writing: {
      instruction: 'សរសេរប្រយោគអំពីទម្លាប់ប្រចាំថ្ងៃរបស់អ្នក',
      wordBank: ['wake up', 'brush', 'study', 'help'],
      tasks: [
        { prompt: 'Every morning, I _____ at 6 o\'clock.', answer: 'wake up' },
        { prompt: 'In the afternoon, I _____ my parents.', answer: 'help' },
      ],
    },
    remember: {
      vocabList: ['Routine', 'Brush', 'Breakfast', 'Homework', 'Exercise'],
      grammarSummary: 'Present Simple: I/We/They eat vs He/She/It eats.',
    },
    practiceQuestions: [
      { question: 'Complete: "She _____ her teeth twice a day."', options: ['brush', 'brushes', 'brushing', 'brushed'], correctIndex: 1, explanationKh: 'ប្រធាន "She" កិរិយាសព្ទត្រូវថែម "es" (brushes)។' },
    ],
  },
  {
    id: 4,
    unitNumber: 4,
    chapterId: 2,
    chapterTitle: 'Chapter 2: Daily Routines & Hobbies',
    unitTitle: 'Days of the Week & Schedules',
    titleEn: 'Unit 4: Days of the Week & Schedules',
    titleKh: 'មេរៀនទី៤ ៖ ថ្ងៃនៃសប្តាហ៍ និងកាលវិភាគ',
    subtitleKh: 'ការរៀនឈ្មោះថ្ងៃទាំង ៧ និងការរៀបចំកាលវិភាគសិក្សា',
    pages: 'ទំព័រ ២៤-២៩',
    icon: '📅',
    grammarFocusEn: 'Prepositions of time: ON Monday, IN the afternoon, AT 7:00',
    grammarFocusKh: 'ការប្រើធ្នាក់ On សម្រាប់ថ្ងៃនៃសប្តាហ៍',
    spellingWords: ['Monday', 'Wednesday', 'Friday', 'Saturday', 'Sunday', 'Weekend'],
    vocabulary: [
      { word: 'Weekday', phonetic: '/ˈwiːkdeɪ/', partOfSpeech: 'noun', meaningKh: 'ថ្ងៃធ្វើការ (ច័ន្ទ-សុក្រ)', exampleSentence: 'We study from Monday to Friday on weekdays.', exampleTranslationKh: 'យើងរៀនពីថ្ងៃច័ន្ទដល់សុក្រនៅថ្ងៃធ្វើការ។' },
      { word: 'Weekend', phonetic: '/ˌwiːkˈend/', partOfSpeech: 'noun', meaningKh: 'ចុងសប្តាហ៍ (សៅរ៍-អាទិត្យ)', exampleSentence: 'I visit my grandparents on the weekend.', exampleTranslationKh: 'ខ្ញុំទៅលេងជីដូនជីតានៅចុងសប្តាហ៍។' },
      { word: 'Timetable', phonetic: '/ˈtaɪmteɪbl/', partOfSpeech: 'noun', meaningKh: 'កាលវិភាគម៉ោងរៀន', exampleSentence: 'Our timetable shows English on Wednesday.', exampleTranslationKh: 'កាលវិភាគរបស់យើងបង្ហាញភាសាអង់គ្លេសនៅថ្ងៃពុធ។' },
      { word: 'Favorite', phonetic: '/ˈfeɪvərɪt/', partOfSpeech: 'adj', meaningKh: 'ដែលចូលចិត្តបំផុត', exampleSentence: 'Science is my favorite subject.', exampleTranslationKh: 'វិទ្យាសាស្ត្រគឺជាមុខវិជ្ជាដែលខ្ញុំចូលចិត្តបំផុត។' },
    ],
    conversations: [
      {
        title: 'Talking about School Timetable',
        lines: [
          { speaker: 'Sokun', text: 'Do we have English on Monday?', translationKh: 'តើយើងមានរៀនភាសាអង់គ្លេសនៅថ្ងៃច័ន្ទទេ?', avatar: '👦' },
          { speaker: 'Kosal', text: 'No, we don\'t. We have English on Wednesday and Friday.', translationKh: 'ទេ មិនមានទេ។ យើងមានភាសាអង់គ្លេសនៅថ្ងៃពុធ និងសុក្រ។', avatar: '🧒' },
          { speaker: 'Sokun', text: 'What is your favorite day of the week?', translationKh: 'តើថ្ងៃណាជាថ្ងៃដែលអ្នកចូលចិត្តជាងគេ?', avatar: '👦' },
          { speaker: 'Kosal', text: 'My favorite day is Saturday because I can play football!', translationKh: 'ថ្ងៃដែលខ្ញុំចូលចិត្តគឺថ្ងៃសៅរ៍ ព្រោះខ្ញុំអាចលេងបាល់ទាត់បាន!', avatar: '🧒' },
        ],
      },
    ],
    dialogueEn: [
      { speaker: 'Sokun', text: 'Do we have English on Monday?', translationKh: 'តើយើងមានរៀនភាសាអង់គ្លេសនៅថ្ងៃច័ន្ទទេ?' },
      { speaker: 'Kosal', text: 'No, we don\'t. We have English on Wednesday and Friday.', translationKh: 'ទេ មិនមានទេ។ យើងមានភាសាអង់គ្លេសនៅថ្ងៃពុធ និងសុក្រ។' },
    ],
    languageFocus: {
      grammarTopic: 'Preposition "ON" with Days of the week',
      rule: 'ត្រូវប្រើធ្នាក់ "on" ពីមុខថ្ងៃនៃសប្តាហ៍ជានិច្ច (on Monday, on Tuesday, on the weekend)។',
      formula: 'on + [Day of the week]',
      examples: [
        { question: 'When do you study English?', answer: 'I study English on Wednesday.', note: 'on + Wednesday' },
        { question: 'What do you do on Sunday?', answer: 'On Sunday, I visit my relatives.', note: 'on + Sunday' },
      ],
      practiceExercises: [
        { instruction: 'Choose the correct preposition', prompt: 'We have physical education _____ Thursday.', options: ['on', 'in', 'at', 'to'], answer: 'on' },
        { instruction: 'Choose the correct day', prompt: 'The day between Tuesday and Thursday is _____.', options: ['Wednesday', 'Monday', 'Friday', 'Saturday'], answer: 'Wednesday' },
      ],
    },
    reading: {
      title: 'Our Weekly School Schedule',
      passage: 'Students in Cambodia go to school from Monday to Saturday morning. On Monday, Wednesday, and Friday, they study Khmer Literature, Mathematics, and English. On Tuesday and Thursday, they enjoy Science and Social Studies. On Sunday, schools are closed, and children spend time with their families.',
      questions: [
        { question: 'Which days do students study English?', options: ['Monday, Wednesday, Friday', 'Tuesday and Thursday', 'Saturday', 'Sunday'], answer: 'Monday, Wednesday, Friday', explanation: 'They study on Monday, Wednesday, and Friday.' },
        { question: 'Are schools open on Sunday?', options: ['No, schools are closed', 'Yes, full day', 'Only morning', 'Only evening'], answer: 'No, schools are closed', explanation: 'On Sunday, schools are closed.' },
      ],
    },
    speaking: {
      instruction: 'សួរមិត្តភក្តិអំពីថ្ងៃដែលគាត់ចូលចិត្ត និងកាលវិភាគមុខវិជ្ជា',
      modelDialogue: [
        { speaker: 'A', text: 'What do you usually do on the weekend?', translationKh: 'តើអ្នកតែងតែធ្វើអ្វីនៅចុងសប្តាហ៍?' },
        { speaker: 'B', text: 'On Saturday, I help my mom cook lunch.', translationKh: 'នៅថ្ងៃសៅរ៍ ខ្ញុំជួយម៉ាក់ធ្វើម្ហូបថ្ងៃត្រង់។' },
      ],
      prompts: [
        'សួរមិត្តភក្តិថាតើថ្ងៃណាគាត់មានរៀនគណិតវិទ្យា',
        'ប្រាប់មិត្តភក្តិពីថ្ងៃដែលអ្នកចូលចិត្តបំផុតក្នុងសប្តាហ៍',
      ],
    },
    writing: {
      instruction: 'បំពេញប្រយោគជាមួយឈ្មោះថ្ងៃ និងធ្នាក់ "on"',
      wordBank: ['on', 'Monday', 'weekend', 'Friday'],
      tasks: [
        { prompt: 'We start our new school week _____ Monday.', answer: 'on' },
        { prompt: 'I love relaxing on the _____.', answer: 'weekend' },
      ],
    },
    remember: {
      vocabList: ['Weekday', 'Weekend', 'Timetable', 'Favorite', 'Monday', 'Friday'],
      grammarSummary: 'Use "on" with days of the week: on Monday, on Friday, on Sunday.',
    },
    practiceQuestions: [
      { question: 'Complete: "I visit my grandparents _____ Sunday."', options: ['on', 'in', 'at', 'with'], correctIndex: 0, explanationKh: 'ត្រូវប្រើធ្នាក់ "on" ពីមុខឈ្មោះថ្ងៃនៃសប្តាហ៍។' },
    ],
  },
];
