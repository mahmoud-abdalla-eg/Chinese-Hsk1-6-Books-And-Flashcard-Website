import {
  buildCoverageReport,
  validateAllLevels,
} from "@/lib/validation/hsk-validation";

const FIELD_GROUPS = {
  wordAudio: ["word audio"],
  exampleAudio: ["example audio"],
  arabic: ["arabic translation", "example arabic"],
  examples: ["example sentence", "example pinyin", "example english"],
};

export function getContentGapReport() {
  const validations = validateAllLevels();
  const coverage = buildCoverageReport();
  const levels = validations.map((validation) => {
    const levelCoverage = coverage.levels.find(
      (item) => Number(item.level) === Number(validation.level),
    );
    const wordAudio = filterMissing(validation.missingFields, "wordAudio");
    const exampleAudio = filterMissing(
      validation.missingFields,
      "exampleAudio",
    );
    const arabic = filterMissing(validation.missingFields, "arabic");
    const examples = filterMissing(validation.missingFields, "examples");
    const conversationAudio = levelCoverage?.missingConversationAudio || [];
    const uncoveredWords = levelCoverage?.uncoveredWords || [];
    return {
      level: validation.level,
      wordCount: validation.actualCount,
      expectedCount: validation.expectedCount,
      wordAudio,
      exampleAudio,
      arabic,
      examples,
      conversationAudio,
      uncoveredWords,
      totalReviewItems:
        wordAudio.length +
        exampleAudio.length +
        arabic.length +
        examples.length +
        conversationAudio.length +
        uncoveredWords.length,
    };
  });
  return {
    generatedAt: coverage.generatedAt,
    totals: levels.reduce(
      (totals, level) => ({
        wordAudio: totals.wordAudio + level.wordAudio.length,
        exampleAudio: totals.exampleAudio + level.exampleAudio.length,
        arabic: totals.arabic + level.arabic.length,
        examples: totals.examples + level.examples.length,
        conversationAudio:
          totals.conversationAudio + level.conversationAudio.length,
        uncoveredWords: totals.uncoveredWords + level.uncoveredWords.length,
        reviewItems: totals.reviewItems + level.totalReviewItems,
      }),
      {
        wordAudio: 0,
        exampleAudio: 0,
        arabic: 0,
        examples: 0,
        conversationAudio: 0,
        uncoveredWords: 0,
        reviewItems: 0,
      },
    ),
    levels,
  };
}

function filterMissing(entries, group) {
  const fields = FIELD_GROUPS[group];
  return entries
    .filter((entry) =>
      entry.missing.some((field) => fields.some((name) => field === name)),
    )
    .map((entry) => ({
      id: entry.id,
      hanzi: entry.hanzi,
      missing: entry.missing.filter((field) =>
        fields.some((name) => field === name),
      ),
    }));
}
