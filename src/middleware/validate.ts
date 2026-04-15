import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationChain } from "express-validator";

/**
 * Runs an array of ValidationChains, then checks results.
 * If any fail, returns 422 with all error messages grouped by field.
 */
export function validate(chains: ValidationChain[]) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Run every chain in parallel
    await Promise.all(chains.map((chain) => chain.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
      return;
    }

    // Group errors by field for a cleaner response
    const grouped: Record<string, string[]> = {};
    for (const err of errors.array()) {
      const field = (err as any).path ?? "general";
      if (!grouped[field]) grouped[field] = [];
      grouped[field].push(err.msg);
    }

    res.status(422).json({
      success: false,
      message: "Validation failed",
      errors: grouped,
    });
  };
}
