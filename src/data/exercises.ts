import { Exercise } from '../types';

export const EXERCISES: Exercise[] = [
  {
    name: 'Baby Scratch',
    nameHe: "בייבי סקראץ'",
    category: 'בסיס',
    difficulty: 1,
    description:
      "הסקראץ' הבסיסי ביותר. הזז את התקליט קדימה ואחורה בצורה שווה, בלי להרים את היד מהפיידר. התנועה חייבת להיות נקייה ועקבית.",
    tips: ["שמור על קצב אחיד בשתי הכיוונים", 'התנועה מהפרק, לא מהכתף', 'התחל לאט ובנה מהירות'],
    duration: 90,
  },
  {
    name: 'Forward Scratch',
    nameHe: "פורוורד סקראץ'",
    category: 'בסיס',
    difficulty: 1,
    description:
      'פתח את הפיידר רק בתנועה קדימה, סגור בחזרה. התוצאה היא צליל חד ונקי רק בכיוון אחד. תרגל את פתיחת הפיידר בדיוק.',
    tips: ['פיידר פתוח = קדימה בלבד', 'סגור לפני החזרה', 'אחידות בלחץ על התקליט'],
    duration: 90,
  },
  {
    name: 'Hydroplane',
    nameHe: 'הידרופליין',
    category: 'בסיס',
    difficulty: 1,
    description:
      "החזק את התקליט עצור בעוד המוזיקה ממשיכה לרוץ מתחת לאצבעך. כשאתה מרים — התקליט קופץ קדימה. יוצר אפקט 'חזרה מהירה'.",
    tips: ['לחץ עדין ועקבי על התקליט', 'שחרר בתיזמון מדויק עם הביט', 'לא לחוץ חזק מדי'],
    duration: 60,
  },
  {
    name: 'Stab Scratch',
    nameHe: 'סטאב',
    category: 'בסיס',
    difficulty: 1,
    description:
      'דקור קצר וחד קדימה עם הפיידר פתוח לשנייה ואז סגור. יוצר נגיעה קצרה ומדויקת של הצליל. כלי עיקרי ב-DJing.',
    tips: ['כל הצליל ב-1/8 מהביט', 'הפיידר נסגר בדיוק', 'תרגל על הביט ובין הביטים'],
    duration: 60,
  },
  {
    name: 'Tear Scratch',
    nameHe: "טיר סקראץ'",
    category: 'בינוני',
    difficulty: 2,
    description:
      'תנועה קדימה מחולקת ל-2 חלקים: מהיר-לאט או לאט-מהיר. יוצר שינוי קצב בתוך תנועה אחת. הפיידר פתוח כל הזמן.',
    tips: ['שנה מהירות באמצע התנועה', 'גרסה קדימה ואחורה', 'תרגל 2-tear ו-3-tear'],
    duration: 90,
  },
  {
    name: 'Transformer Scratch',
    nameHe: 'טרנספורמר',
    category: 'בינוני',
    difficulty: 2,
    description:
      "הזז את התקליט לאט קדימה בעוד הפיידר 'קוצץ' את הצליל מהר — מהיר פתוח/סגור בידיים שונות. יוצר את אפקט הגמגום האיקוני.",
    tips: ['התקליט זז לאט, פיידר זז מהר', 'תרגל את ידי הפיידר בנפרד', '3-5 קצוצים לכיוון'],
    duration: 90,
  },
  {
    name: 'Chirp Scratch',
    nameHe: "צ'ירפ",
    category: 'בינוני',
    difficulty: 2,
    description:
      "פיידר פתוח בתחילת התנועה קדימה, סגור לפני הסוף. יוצר 'ציוץ' קצר. הסוד הוא סגירת הפיידר לפני שהתקליט עוצר.",
    tips: ["פיידר נסגר לפני שהתקליט עוצר", "הצליל צריך להישמע כ'צ'ח'", 'לאחר מכן הוסף גם בחזרה'],
    duration: 90,
  },
  {
    name: 'Rhythm Scratch',
    nameHe: 'ריתמ סקראץ',
    category: 'ריתם',
    difficulty: 2,
    description:
      'בחר beat pattern (למשל 1-e-and-a) ותרגל להכניס את הסקראץ בדיוק בנקודות הריתמיות. דגש על timing ולא על הטכניקה עצמה.',
    tips: ['השתמש במטרונום', "ספור בקול רם", "תרגל על '2' ו-'4' קודם"],
    duration: 90,
  },
  {
    name: 'Combo: Baby + Chirp',
    nameHe: "קומבו: בייבי + צ'ירפ",
    category: 'קומבו',
    difficulty: 2,
    description:
      "שלב בייבי סקראץ' עם צ'ירפ: 2 בייבי סקראץ'ים ואז צ'ירפ. תרגל את המעבר בין הטכניקות בצורה חלקה ורציפה.",
    tips: ["בייבי × 2, צ'ירפ × 1", 'שמור על קצב אחיד', 'הפיידר מתנהג שונה בכל טכניקה'],
    duration: 90,
  },
  {
    name: 'Flare Scratch',
    nameHe: 'פלאר',
    category: 'מתקדם',
    difficulty: 3,
    description:
      "הפוך מהצ'ירפ — פיידר פתוח רוב הזמן, נסגר ונפתח מהר באמצע התנועה. מייצר נקודות קצוצות בתוך הצליל הרצוף.",
    tips: ['הפיידר מתחיל ומסיים פתוח', 'הסגירה באמצע תנועה', '1-flare = סגירה אחת, 2-flare = שתיים'],
    duration: 90,
  },
  {
    name: 'Speed Builder',
    nameHe: 'בניית מהירות',
    category: 'כושר',
    difficulty: 3,
    description:
      "התחל בייבי סקראץ' לאט מאוד ועלה כל 15 שניות במהירות. מיקוד: שמירה על דיוק גם בעלייה במהירות. קצר ואינטנסיבי.",
    tips: ['לאט → בינוני → מהיר → מהיר מאוד', 'כאשר מדויק → עלה במהירות', 'חזור לאט אם איבדת דיוק'],
    duration: 90,
  },
  {
    name: 'Mirror Practice',
    nameHe: 'תרגול מראה',
    category: 'כושר',
    difficulty: 3,
    description:
      'תרגל כל סקראץ שעשית היום עם היד הלא-דומיננטית. מחזק הבנה עמוקה של הטכניקה ובונה שרירים חדשים.',
    tips: ['אל תתייאש — זה קשה', '10-15 שניות לכל טכניקה', 'קצב לאט יותר מהרגיל'],
    duration: 90,
  },
  {
    name: 'Orbit Scratch',
    nameHe: 'אורביט',
    category: 'מתקדם',
    difficulty: 4,
    description:
      'שילוב של פלאר בשני הכיוונים. התקליט הולך קדימה-אחורה עם קצוצים בכל כיוון, יוצר תנועה מעגלית של הצליל.',
    tips: ['בנה על הפלאר קודם', 'קדימה: פלאר, אחורה: פלאר', 'שמור על סימטריה'],
    duration: 120,
  },
  {
    name: 'Crab Scratch',
    nameHe: 'קראב',
    category: 'מתקדם',
    difficulty: 4,
    description:
      'ארבעה אצבעות על הפיידר מייצרות 4 קצוצים מהירים. כל אצבע נוגעת ומרימה בסדר: קמיצה, אמצע, קשת, אגודל. הכי מהיר מכולם.',
    tips: ['תרגל את האצבעות בנפרד על שולחן', 'הסדר: 4-3-2-אגודל', 'התחל ב-2 אצבעות (critter)'],
    duration: 120,
  },
  {
    name: 'Free Style',
    nameHe: 'פריסטייל',
    category: 'יצירתיות',
    difficulty: 2,
    description:
      'שחרר! תרגל כל מה שרוצה — שלב טכניקות, תן לעצמך להתנסות ולטעות. אין נכון כאן, רק גילוי. הקשב למוזיקה.',
    tips: ['אל תחשוב יותר מדי', 'עקוב אחרי הקצב של השיר', 'נסה משהו שלא ניסית'],
    duration: 90,
  },
];

export const TOTAL_SECONDS = 10 * 60;

export function generateSessionPlan(exercises: Exercise[]) {
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  const easy = shuffled.filter((e) => e.difficulty <= 2);
  const hard = shuffled.filter((e) => e.difficulty >= 3);

  const picked: Exercise[] = [];
  const used = new Set<string>();

  const pick = (pool: Exercise[]) => {
    const found = pool.find((e) => !used.has(e.name));
    if (found) { used.add(found.name); picked.push(found); }
  };

  pick(easy);
  pick(easy);
  pick(hard);
  pick(hard);
  pick(shuffled);

  const totalRaw = picked.reduce((s, e) => s + e.duration, 0);
  const scale = TOTAL_SECONDS / totalRaw;

  return picked.map((e) => ({
    ...e,
    assignedDuration: Math.round(e.duration * scale),
  }));
}
