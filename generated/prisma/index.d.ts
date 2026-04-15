
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model EntryExitLog
 * 
 */
export type EntryExitLog = $Result.DefaultSelection<Prisma.$EntryExitLogPayload>
/**
 * Model DeviceSession
 * 
 */
export type DeviceSession = $Result.DefaultSelection<Prisma.$DeviceSessionPayload>
/**
 * Model GateConfig
 * 
 */
export type GateConfig = $Result.DefaultSelection<Prisma.$GateConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const StudentStatus: {
  INSIDE: 'INSIDE',
  OUTSIDE: 'OUTSIDE'
};

export type StudentStatus = (typeof StudentStatus)[keyof typeof StudentStatus]


export const RequestType: {
  ENTRY: 'ENTRY',
  EXIT: 'EXIT'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  AUTO_APPROVED: 'AUTO_APPROVED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type StudentStatus = $Enums.StudentStatus

export const StudentStatus: typeof $Enums.StudentStatus

export type RequestType = $Enums.RequestType

export const RequestType: typeof $Enums.RequestType

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departments
 * const departments = await prisma.department.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.entryExitLog`: Exposes CRUD operations for the **EntryExitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntryExitLogs
    * const entryExitLogs = await prisma.entryExitLog.findMany()
    * ```
    */
  get entryExitLog(): Prisma.EntryExitLogDelegate<ExtArgs>;

  /**
   * `prisma.deviceSession`: Exposes CRUD operations for the **DeviceSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceSessions
    * const deviceSessions = await prisma.deviceSession.findMany()
    * ```
    */
  get deviceSession(): Prisma.DeviceSessionDelegate<ExtArgs>;

  /**
   * `prisma.gateConfig`: Exposes CRUD operations for the **GateConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GateConfigs
    * const gateConfigs = await prisma.gateConfig.findMany()
    * ```
    */
  get gateConfig(): Prisma.GateConfigDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Department: 'Department',
    Student: 'Student',
    Admin: 'Admin',
    EntryExitLog: 'EntryExitLog',
    DeviceSession: 'DeviceSession',
    GateConfig: 'GateConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "department" | "student" | "admin" | "entryExitLog" | "deviceSession" | "gateConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      EntryExitLog: {
        payload: Prisma.$EntryExitLogPayload<ExtArgs>
        fields: Prisma.EntryExitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryExitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryExitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>
          }
          findFirst: {
            args: Prisma.EntryExitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryExitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>
          }
          findMany: {
            args: Prisma.EntryExitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>[]
          }
          create: {
            args: Prisma.EntryExitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>
          }
          createMany: {
            args: Prisma.EntryExitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryExitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>[]
          }
          delete: {
            args: Prisma.EntryExitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>
          }
          update: {
            args: Prisma.EntryExitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>
          }
          deleteMany: {
            args: Prisma.EntryExitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryExitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntryExitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryExitLogPayload>
          }
          aggregate: {
            args: Prisma.EntryExitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntryExitLog>
          }
          groupBy: {
            args: Prisma.EntryExitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryExitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryExitLogCountArgs<ExtArgs>
            result: $Utils.Optional<EntryExitLogCountAggregateOutputType> | number
          }
        }
      }
      DeviceSession: {
        payload: Prisma.$DeviceSessionPayload<ExtArgs>
        fields: Prisma.DeviceSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          findFirst: {
            args: Prisma.DeviceSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          findMany: {
            args: Prisma.DeviceSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          create: {
            args: Prisma.DeviceSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          createMany: {
            args: Prisma.DeviceSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          delete: {
            args: Prisma.DeviceSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          update: {
            args: Prisma.DeviceSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          deleteMany: {
            args: Prisma.DeviceSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          aggregate: {
            args: Prisma.DeviceSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceSession>
          }
          groupBy: {
            args: Prisma.DeviceSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceSessionCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionCountAggregateOutputType> | number
          }
        }
      }
      GateConfig: {
        payload: Prisma.$GateConfigPayload<ExtArgs>
        fields: Prisma.GateConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GateConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GateConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>
          }
          findFirst: {
            args: Prisma.GateConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GateConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>
          }
          findMany: {
            args: Prisma.GateConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>[]
          }
          create: {
            args: Prisma.GateConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>
          }
          createMany: {
            args: Prisma.GateConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GateConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>[]
          }
          delete: {
            args: Prisma.GateConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>
          }
          update: {
            args: Prisma.GateConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>
          }
          deleteMany: {
            args: Prisma.GateConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GateConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GateConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateConfigPayload>
          }
          aggregate: {
            args: Prisma.GateConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGateConfig>
          }
          groupBy: {
            args: Prisma.GateConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GateConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GateConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GateConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    students: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | DepartmentCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    sessions: number
    logs: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | StudentCountOutputTypeCountSessionsArgs
    logs?: boolean | StudentCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryExitLogWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    logs: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | AdminCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryExitLogWhereInput
  }


  /**
   * Count Type DeviceSessionCountOutputType
   */

  export type DeviceSessionCountOutputType = {
    logs: number
  }

  export type DeviceSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | DeviceSessionCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * DeviceSessionCountOutputType without action
   */
  export type DeviceSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessionCountOutputType
     */
    select?: DeviceSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceSessionCountOutputType without action
   */
  export type DeviceSessionCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryExitLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    students?: boolean | Department$studentsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Department$studentsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Department$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Department$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department.students
   */
  export type Department$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    departmentId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    departmentId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    mobileNo: string | null
    roomNo: string | null
    gender: $Enums.Gender | null
    departmentId: number | null
    currentStatus: $Enums.StudentStatus | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    mobileNo: string | null
    roomNo: string | null
    gender: $Enums.Gender | null
    departmentId: number | null
    currentStatus: $Enums.StudentStatus | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    mobileNo: number
    roomNo: number
    gender: number
    departmentId: number
    currentStatus: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    departmentId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    departmentId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    mobileNo?: true
    roomNo?: true
    gender?: true
    departmentId?: true
    currentStatus?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    mobileNo?: true
    roomNo?: true
    gender?: true
    departmentId?: true
    currentStatus?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    mobileNo?: true
    roomNo?: true
    gender?: true
    departmentId?: true
    currentStatus?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    departmentId: number
    currentStatus: $Enums.StudentStatus
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    mobileNo?: boolean
    roomNo?: boolean
    gender?: boolean
    departmentId?: boolean
    currentStatus?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    sessions?: boolean | Student$sessionsArgs<ExtArgs>
    logs?: boolean | Student$logsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    mobileNo?: boolean
    roomNo?: boolean
    gender?: boolean
    departmentId?: boolean
    currentStatus?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    mobileNo?: boolean
    roomNo?: boolean
    gender?: boolean
    departmentId?: boolean
    currentStatus?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    sessions?: boolean | Student$sessionsArgs<ExtArgs>
    logs?: boolean | Student$logsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      sessions: Prisma.$DeviceSessionPayload<ExtArgs>[]
      logs: Prisma.$EntryExitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      mobileNo: string
      roomNo: string
      gender: $Enums.Gender
      departmentId: number
      currentStatus: $Enums.StudentStatus
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sessions<T extends Student$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Student$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findMany"> | Null>
    logs<T extends Student$logsArgs<ExtArgs> = {}>(args?: Subset<T, Student$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly email: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly mobileNo: FieldRef<"Student", 'String'>
    readonly roomNo: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly departmentId: FieldRef<"Student", 'Int'>
    readonly currentStatus: FieldRef<"Student", 'StudentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student.sessions
   */
  export type Student$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    where?: DeviceSessionWhereInput
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    cursor?: DeviceSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * Student.logs
   */
  export type Student$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    where?: EntryExitLogWhereInput
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    cursor?: EntryExitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryExitLogScalarFieldEnum | EntryExitLogScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    logs?: boolean | Admin$logsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Admin$logsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      logs: Prisma.$EntryExitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Admin$logsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin.logs
   */
  export type Admin$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    where?: EntryExitLogWhereInput
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    cursor?: EntryExitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryExitLogScalarFieldEnum | EntryExitLogScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model EntryExitLog
   */

  export type AggregateEntryExitLog = {
    _count: EntryExitLogCountAggregateOutputType | null
    _avg: EntryExitLogAvgAggregateOutputType | null
    _sum: EntryExitLogSumAggregateOutputType | null
    _min: EntryExitLogMinAggregateOutputType | null
    _max: EntryExitLogMaxAggregateOutputType | null
  }

  export type EntryExitLogAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    deviceSessionId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    adminId: number | null
  }

  export type EntryExitLogSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    deviceSessionId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    adminId: number | null
  }

  export type EntryExitLogMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    deviceSessionId: number | null
    requestType: $Enums.RequestType | null
    requestTime: Date | null
    approvalStatus: $Enums.ApprovalStatus | null
    approvalTime: Date | null
    latitude: Decimal | null
    longitude: Decimal | null
    locationValid: boolean | null
    suspicious: boolean | null
    adminId: number | null
  }

  export type EntryExitLogMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    deviceSessionId: number | null
    requestType: $Enums.RequestType | null
    requestTime: Date | null
    approvalStatus: $Enums.ApprovalStatus | null
    approvalTime: Date | null
    latitude: Decimal | null
    longitude: Decimal | null
    locationValid: boolean | null
    suspicious: boolean | null
    adminId: number | null
  }

  export type EntryExitLogCountAggregateOutputType = {
    id: number
    studentId: number
    deviceSessionId: number
    requestType: number
    requestTime: number
    approvalStatus: number
    approvalTime: number
    latitude: number
    longitude: number
    locationValid: number
    suspicious: number
    adminId: number
    _all: number
  }


  export type EntryExitLogAvgAggregateInputType = {
    id?: true
    studentId?: true
    deviceSessionId?: true
    latitude?: true
    longitude?: true
    adminId?: true
  }

  export type EntryExitLogSumAggregateInputType = {
    id?: true
    studentId?: true
    deviceSessionId?: true
    latitude?: true
    longitude?: true
    adminId?: true
  }

  export type EntryExitLogMinAggregateInputType = {
    id?: true
    studentId?: true
    deviceSessionId?: true
    requestType?: true
    requestTime?: true
    approvalStatus?: true
    approvalTime?: true
    latitude?: true
    longitude?: true
    locationValid?: true
    suspicious?: true
    adminId?: true
  }

  export type EntryExitLogMaxAggregateInputType = {
    id?: true
    studentId?: true
    deviceSessionId?: true
    requestType?: true
    requestTime?: true
    approvalStatus?: true
    approvalTime?: true
    latitude?: true
    longitude?: true
    locationValid?: true
    suspicious?: true
    adminId?: true
  }

  export type EntryExitLogCountAggregateInputType = {
    id?: true
    studentId?: true
    deviceSessionId?: true
    requestType?: true
    requestTime?: true
    approvalStatus?: true
    approvalTime?: true
    latitude?: true
    longitude?: true
    locationValid?: true
    suspicious?: true
    adminId?: true
    _all?: true
  }

  export type EntryExitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntryExitLog to aggregate.
     */
    where?: EntryExitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryExitLogs to fetch.
     */
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryExitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryExitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryExitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntryExitLogs
    **/
    _count?: true | EntryExitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntryExitLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntryExitLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryExitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryExitLogMaxAggregateInputType
  }

  export type GetEntryExitLogAggregateType<T extends EntryExitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEntryExitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntryExitLog[P]>
      : GetScalarType<T[P], AggregateEntryExitLog[P]>
  }




  export type EntryExitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryExitLogWhereInput
    orderBy?: EntryExitLogOrderByWithAggregationInput | EntryExitLogOrderByWithAggregationInput[]
    by: EntryExitLogScalarFieldEnum[] | EntryExitLogScalarFieldEnum
    having?: EntryExitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryExitLogCountAggregateInputType | true
    _avg?: EntryExitLogAvgAggregateInputType
    _sum?: EntryExitLogSumAggregateInputType
    _min?: EntryExitLogMinAggregateInputType
    _max?: EntryExitLogMaxAggregateInputType
  }

  export type EntryExitLogGroupByOutputType = {
    id: number
    studentId: number
    deviceSessionId: number | null
    requestType: $Enums.RequestType
    requestTime: Date
    approvalStatus: $Enums.ApprovalStatus
    approvalTime: Date | null
    latitude: Decimal
    longitude: Decimal
    locationValid: boolean
    suspicious: boolean
    adminId: number | null
    _count: EntryExitLogCountAggregateOutputType | null
    _avg: EntryExitLogAvgAggregateOutputType | null
    _sum: EntryExitLogSumAggregateOutputType | null
    _min: EntryExitLogMinAggregateOutputType | null
    _max: EntryExitLogMaxAggregateOutputType | null
  }

  type GetEntryExitLogGroupByPayload<T extends EntryExitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryExitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryExitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryExitLogGroupByOutputType[P]>
            : GetScalarType<T[P], EntryExitLogGroupByOutputType[P]>
        }
      >
    >


  export type EntryExitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    deviceSessionId?: boolean
    requestType?: boolean
    requestTime?: boolean
    approvalStatus?: boolean
    approvalTime?: boolean
    latitude?: boolean
    longitude?: boolean
    locationValid?: boolean
    suspicious?: boolean
    adminId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    admin?: boolean | EntryExitLog$adminArgs<ExtArgs>
    deviceSession?: boolean | EntryExitLog$deviceSessionArgs<ExtArgs>
  }, ExtArgs["result"]["entryExitLog"]>

  export type EntryExitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    deviceSessionId?: boolean
    requestType?: boolean
    requestTime?: boolean
    approvalStatus?: boolean
    approvalTime?: boolean
    latitude?: boolean
    longitude?: boolean
    locationValid?: boolean
    suspicious?: boolean
    adminId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    admin?: boolean | EntryExitLog$adminArgs<ExtArgs>
    deviceSession?: boolean | EntryExitLog$deviceSessionArgs<ExtArgs>
  }, ExtArgs["result"]["entryExitLog"]>

  export type EntryExitLogSelectScalar = {
    id?: boolean
    studentId?: boolean
    deviceSessionId?: boolean
    requestType?: boolean
    requestTime?: boolean
    approvalStatus?: boolean
    approvalTime?: boolean
    latitude?: boolean
    longitude?: boolean
    locationValid?: boolean
    suspicious?: boolean
    adminId?: boolean
  }

  export type EntryExitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    admin?: boolean | EntryExitLog$adminArgs<ExtArgs>
    deviceSession?: boolean | EntryExitLog$deviceSessionArgs<ExtArgs>
  }
  export type EntryExitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    admin?: boolean | EntryExitLog$adminArgs<ExtArgs>
    deviceSession?: boolean | EntryExitLog$deviceSessionArgs<ExtArgs>
  }

  export type $EntryExitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntryExitLog"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
      deviceSession: Prisma.$DeviceSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      deviceSessionId: number | null
      requestType: $Enums.RequestType
      requestTime: Date
      approvalStatus: $Enums.ApprovalStatus
      approvalTime: Date | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      locationValid: boolean
      suspicious: boolean
      adminId: number | null
    }, ExtArgs["result"]["entryExitLog"]>
    composites: {}
  }

  type EntryExitLogGetPayload<S extends boolean | null | undefined | EntryExitLogDefaultArgs> = $Result.GetResult<Prisma.$EntryExitLogPayload, S>

  type EntryExitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntryExitLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntryExitLogCountAggregateInputType | true
    }

  export interface EntryExitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntryExitLog'], meta: { name: 'EntryExitLog' } }
    /**
     * Find zero or one EntryExitLog that matches the filter.
     * @param {EntryExitLogFindUniqueArgs} args - Arguments to find a EntryExitLog
     * @example
     * // Get one EntryExitLog
     * const entryExitLog = await prisma.entryExitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryExitLogFindUniqueArgs>(args: SelectSubset<T, EntryExitLogFindUniqueArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EntryExitLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntryExitLogFindUniqueOrThrowArgs} args - Arguments to find a EntryExitLog
     * @example
     * // Get one EntryExitLog
     * const entryExitLog = await prisma.entryExitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryExitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryExitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EntryExitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogFindFirstArgs} args - Arguments to find a EntryExitLog
     * @example
     * // Get one EntryExitLog
     * const entryExitLog = await prisma.entryExitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryExitLogFindFirstArgs>(args?: SelectSubset<T, EntryExitLogFindFirstArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EntryExitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogFindFirstOrThrowArgs} args - Arguments to find a EntryExitLog
     * @example
     * // Get one EntryExitLog
     * const entryExitLog = await prisma.entryExitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryExitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryExitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EntryExitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntryExitLogs
     * const entryExitLogs = await prisma.entryExitLog.findMany()
     * 
     * // Get first 10 EntryExitLogs
     * const entryExitLogs = await prisma.entryExitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryExitLogWithIdOnly = await prisma.entryExitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryExitLogFindManyArgs>(args?: SelectSubset<T, EntryExitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EntryExitLog.
     * @param {EntryExitLogCreateArgs} args - Arguments to create a EntryExitLog.
     * @example
     * // Create one EntryExitLog
     * const EntryExitLog = await prisma.entryExitLog.create({
     *   data: {
     *     // ... data to create a EntryExitLog
     *   }
     * })
     * 
     */
    create<T extends EntryExitLogCreateArgs>(args: SelectSubset<T, EntryExitLogCreateArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EntryExitLogs.
     * @param {EntryExitLogCreateManyArgs} args - Arguments to create many EntryExitLogs.
     * @example
     * // Create many EntryExitLogs
     * const entryExitLog = await prisma.entryExitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryExitLogCreateManyArgs>(args?: SelectSubset<T, EntryExitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EntryExitLogs and returns the data saved in the database.
     * @param {EntryExitLogCreateManyAndReturnArgs} args - Arguments to create many EntryExitLogs.
     * @example
     * // Create many EntryExitLogs
     * const entryExitLog = await prisma.entryExitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EntryExitLogs and only return the `id`
     * const entryExitLogWithIdOnly = await prisma.entryExitLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryExitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryExitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EntryExitLog.
     * @param {EntryExitLogDeleteArgs} args - Arguments to delete one EntryExitLog.
     * @example
     * // Delete one EntryExitLog
     * const EntryExitLog = await prisma.entryExitLog.delete({
     *   where: {
     *     // ... filter to delete one EntryExitLog
     *   }
     * })
     * 
     */
    delete<T extends EntryExitLogDeleteArgs>(args: SelectSubset<T, EntryExitLogDeleteArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EntryExitLog.
     * @param {EntryExitLogUpdateArgs} args - Arguments to update one EntryExitLog.
     * @example
     * // Update one EntryExitLog
     * const entryExitLog = await prisma.entryExitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryExitLogUpdateArgs>(args: SelectSubset<T, EntryExitLogUpdateArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EntryExitLogs.
     * @param {EntryExitLogDeleteManyArgs} args - Arguments to filter EntryExitLogs to delete.
     * @example
     * // Delete a few EntryExitLogs
     * const { count } = await prisma.entryExitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryExitLogDeleteManyArgs>(args?: SelectSubset<T, EntryExitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntryExitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntryExitLogs
     * const entryExitLog = await prisma.entryExitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryExitLogUpdateManyArgs>(args: SelectSubset<T, EntryExitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntryExitLog.
     * @param {EntryExitLogUpsertArgs} args - Arguments to update or create a EntryExitLog.
     * @example
     * // Update or create a EntryExitLog
     * const entryExitLog = await prisma.entryExitLog.upsert({
     *   create: {
     *     // ... data to create a EntryExitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntryExitLog we want to update
     *   }
     * })
     */
    upsert<T extends EntryExitLogUpsertArgs>(args: SelectSubset<T, EntryExitLogUpsertArgs<ExtArgs>>): Prisma__EntryExitLogClient<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EntryExitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogCountArgs} args - Arguments to filter EntryExitLogs to count.
     * @example
     * // Count the number of EntryExitLogs
     * const count = await prisma.entryExitLog.count({
     *   where: {
     *     // ... the filter for the EntryExitLogs we want to count
     *   }
     * })
    **/
    count<T extends EntryExitLogCountArgs>(
      args?: Subset<T, EntryExitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryExitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntryExitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryExitLogAggregateArgs>(args: Subset<T, EntryExitLogAggregateArgs>): Prisma.PrismaPromise<GetEntryExitLogAggregateType<T>>

    /**
     * Group by EntryExitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryExitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntryExitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryExitLogGroupByArgs['orderBy'] }
        : { orderBy?: EntryExitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntryExitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryExitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntryExitLog model
   */
  readonly fields: EntryExitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntryExitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryExitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends EntryExitLog$adminArgs<ExtArgs> = {}>(args?: Subset<T, EntryExitLog$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    deviceSession<T extends EntryExitLog$deviceSessionArgs<ExtArgs> = {}>(args?: Subset<T, EntryExitLog$deviceSessionArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EntryExitLog model
   */ 
  interface EntryExitLogFieldRefs {
    readonly id: FieldRef<"EntryExitLog", 'Int'>
    readonly studentId: FieldRef<"EntryExitLog", 'Int'>
    readonly deviceSessionId: FieldRef<"EntryExitLog", 'Int'>
    readonly requestType: FieldRef<"EntryExitLog", 'RequestType'>
    readonly requestTime: FieldRef<"EntryExitLog", 'DateTime'>
    readonly approvalStatus: FieldRef<"EntryExitLog", 'ApprovalStatus'>
    readonly approvalTime: FieldRef<"EntryExitLog", 'DateTime'>
    readonly latitude: FieldRef<"EntryExitLog", 'Decimal'>
    readonly longitude: FieldRef<"EntryExitLog", 'Decimal'>
    readonly locationValid: FieldRef<"EntryExitLog", 'Boolean'>
    readonly suspicious: FieldRef<"EntryExitLog", 'Boolean'>
    readonly adminId: FieldRef<"EntryExitLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EntryExitLog findUnique
   */
  export type EntryExitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * Filter, which EntryExitLog to fetch.
     */
    where: EntryExitLogWhereUniqueInput
  }

  /**
   * EntryExitLog findUniqueOrThrow
   */
  export type EntryExitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * Filter, which EntryExitLog to fetch.
     */
    where: EntryExitLogWhereUniqueInput
  }

  /**
   * EntryExitLog findFirst
   */
  export type EntryExitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * Filter, which EntryExitLog to fetch.
     */
    where?: EntryExitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryExitLogs to fetch.
     */
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntryExitLogs.
     */
    cursor?: EntryExitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryExitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryExitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntryExitLogs.
     */
    distinct?: EntryExitLogScalarFieldEnum | EntryExitLogScalarFieldEnum[]
  }

  /**
   * EntryExitLog findFirstOrThrow
   */
  export type EntryExitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * Filter, which EntryExitLog to fetch.
     */
    where?: EntryExitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryExitLogs to fetch.
     */
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntryExitLogs.
     */
    cursor?: EntryExitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryExitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryExitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntryExitLogs.
     */
    distinct?: EntryExitLogScalarFieldEnum | EntryExitLogScalarFieldEnum[]
  }

  /**
   * EntryExitLog findMany
   */
  export type EntryExitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * Filter, which EntryExitLogs to fetch.
     */
    where?: EntryExitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryExitLogs to fetch.
     */
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntryExitLogs.
     */
    cursor?: EntryExitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryExitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryExitLogs.
     */
    skip?: number
    distinct?: EntryExitLogScalarFieldEnum | EntryExitLogScalarFieldEnum[]
  }

  /**
   * EntryExitLog create
   */
  export type EntryExitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EntryExitLog.
     */
    data: XOR<EntryExitLogCreateInput, EntryExitLogUncheckedCreateInput>
  }

  /**
   * EntryExitLog createMany
   */
  export type EntryExitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntryExitLogs.
     */
    data: EntryExitLogCreateManyInput | EntryExitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntryExitLog createManyAndReturn
   */
  export type EntryExitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EntryExitLogs.
     */
    data: EntryExitLogCreateManyInput | EntryExitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntryExitLog update
   */
  export type EntryExitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EntryExitLog.
     */
    data: XOR<EntryExitLogUpdateInput, EntryExitLogUncheckedUpdateInput>
    /**
     * Choose, which EntryExitLog to update.
     */
    where: EntryExitLogWhereUniqueInput
  }

  /**
   * EntryExitLog updateMany
   */
  export type EntryExitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntryExitLogs.
     */
    data: XOR<EntryExitLogUpdateManyMutationInput, EntryExitLogUncheckedUpdateManyInput>
    /**
     * Filter which EntryExitLogs to update
     */
    where?: EntryExitLogWhereInput
  }

  /**
   * EntryExitLog upsert
   */
  export type EntryExitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EntryExitLog to update in case it exists.
     */
    where: EntryExitLogWhereUniqueInput
    /**
     * In case the EntryExitLog found by the `where` argument doesn't exist, create a new EntryExitLog with this data.
     */
    create: XOR<EntryExitLogCreateInput, EntryExitLogUncheckedCreateInput>
    /**
     * In case the EntryExitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryExitLogUpdateInput, EntryExitLogUncheckedUpdateInput>
  }

  /**
   * EntryExitLog delete
   */
  export type EntryExitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    /**
     * Filter which EntryExitLog to delete.
     */
    where: EntryExitLogWhereUniqueInput
  }

  /**
   * EntryExitLog deleteMany
   */
  export type EntryExitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntryExitLogs to delete
     */
    where?: EntryExitLogWhereInput
  }

  /**
   * EntryExitLog.admin
   */
  export type EntryExitLog$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * EntryExitLog.deviceSession
   */
  export type EntryExitLog$deviceSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    where?: DeviceSessionWhereInput
  }

  /**
   * EntryExitLog without action
   */
  export type EntryExitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
  }


  /**
   * Model DeviceSession
   */

  export type AggregateDeviceSession = {
    _count: DeviceSessionCountAggregateOutputType | null
    _avg: DeviceSessionAvgAggregateOutputType | null
    _sum: DeviceSessionSumAggregateOutputType | null
    _min: DeviceSessionMinAggregateOutputType | null
    _max: DeviceSessionMaxAggregateOutputType | null
  }

  export type DeviceSessionAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type DeviceSessionSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type DeviceSessionMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    deviceId: string | null
    deviceName: string | null
    ipAddress: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    lastSeen: Date | null
    isActive: boolean | null
  }

  export type DeviceSessionMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    deviceId: string | null
    deviceName: string | null
    ipAddress: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    lastSeen: Date | null
    isActive: boolean | null
  }

  export type DeviceSessionCountAggregateOutputType = {
    id: number
    studentId: number
    deviceId: number
    deviceName: number
    ipAddress: number
    latitude: number
    longitude: number
    createdAt: number
    lastSeen: number
    isActive: number
    _all: number
  }


  export type DeviceSessionAvgAggregateInputType = {
    id?: true
    studentId?: true
    latitude?: true
    longitude?: true
  }

  export type DeviceSessionSumAggregateInputType = {
    id?: true
    studentId?: true
    latitude?: true
    longitude?: true
  }

  export type DeviceSessionMinAggregateInputType = {
    id?: true
    studentId?: true
    deviceId?: true
    deviceName?: true
    ipAddress?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    lastSeen?: true
    isActive?: true
  }

  export type DeviceSessionMaxAggregateInputType = {
    id?: true
    studentId?: true
    deviceId?: true
    deviceName?: true
    ipAddress?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    lastSeen?: true
    isActive?: true
  }

  export type DeviceSessionCountAggregateInputType = {
    id?: true
    studentId?: true
    deviceId?: true
    deviceName?: true
    ipAddress?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    lastSeen?: true
    isActive?: true
    _all?: true
  }

  export type DeviceSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSession to aggregate.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceSessions
    **/
    _count?: true | DeviceSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceSessionMaxAggregateInputType
  }

  export type GetDeviceSessionAggregateType<T extends DeviceSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceSession[P]>
      : GetScalarType<T[P], AggregateDeviceSession[P]>
  }




  export type DeviceSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionWhereInput
    orderBy?: DeviceSessionOrderByWithAggregationInput | DeviceSessionOrderByWithAggregationInput[]
    by: DeviceSessionScalarFieldEnum[] | DeviceSessionScalarFieldEnum
    having?: DeviceSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceSessionCountAggregateInputType | true
    _avg?: DeviceSessionAvgAggregateInputType
    _sum?: DeviceSessionSumAggregateInputType
    _min?: DeviceSessionMinAggregateInputType
    _max?: DeviceSessionMaxAggregateInputType
  }

  export type DeviceSessionGroupByOutputType = {
    id: number
    studentId: number
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal
    longitude: Decimal
    createdAt: Date
    lastSeen: Date
    isActive: boolean
    _count: DeviceSessionCountAggregateOutputType | null
    _avg: DeviceSessionAvgAggregateOutputType | null
    _sum: DeviceSessionSumAggregateOutputType | null
    _min: DeviceSessionMinAggregateOutputType | null
    _max: DeviceSessionMaxAggregateOutputType | null
  }

  type GetDeviceSessionGroupByPayload<T extends DeviceSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceSessionGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceSessionGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    deviceId?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    isActive?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    logs?: boolean | DeviceSession$logsArgs<ExtArgs>
    _count?: boolean | DeviceSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    deviceId?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    isActive?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectScalar = {
    id?: boolean
    studentId?: boolean
    deviceId?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    isActive?: boolean
  }

  export type DeviceSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    logs?: boolean | DeviceSession$logsArgs<ExtArgs>
    _count?: boolean | DeviceSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $DeviceSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceSession"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      logs: Prisma.$EntryExitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      deviceId: string
      deviceName: string
      ipAddress: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      createdAt: Date
      lastSeen: Date
      isActive: boolean
    }, ExtArgs["result"]["deviceSession"]>
    composites: {}
  }

  type DeviceSessionGetPayload<S extends boolean | null | undefined | DeviceSessionDefaultArgs> = $Result.GetResult<Prisma.$DeviceSessionPayload, S>

  type DeviceSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceSessionCountAggregateInputType | true
    }

  export interface DeviceSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceSession'], meta: { name: 'DeviceSession' } }
    /**
     * Find zero or one DeviceSession that matches the filter.
     * @param {DeviceSessionFindUniqueArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceSessionFindUniqueArgs>(args: SelectSubset<T, DeviceSessionFindUniqueArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeviceSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceSessionFindUniqueOrThrowArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeviceSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindFirstArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceSessionFindFirstArgs>(args?: SelectSubset<T, DeviceSessionFindFirstArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeviceSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindFirstOrThrowArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeviceSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceSessions
     * const deviceSessions = await prisma.deviceSession.findMany()
     * 
     * // Get first 10 DeviceSessions
     * const deviceSessions = await prisma.deviceSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceSessionFindManyArgs>(args?: SelectSubset<T, DeviceSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeviceSession.
     * @param {DeviceSessionCreateArgs} args - Arguments to create a DeviceSession.
     * @example
     * // Create one DeviceSession
     * const DeviceSession = await prisma.deviceSession.create({
     *   data: {
     *     // ... data to create a DeviceSession
     *   }
     * })
     * 
     */
    create<T extends DeviceSessionCreateArgs>(args: SelectSubset<T, DeviceSessionCreateArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeviceSessions.
     * @param {DeviceSessionCreateManyArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSession = await prisma.deviceSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceSessionCreateManyArgs>(args?: SelectSubset<T, DeviceSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceSessions and returns the data saved in the database.
     * @param {DeviceSessionCreateManyAndReturnArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSession = await prisma.deviceSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceSessions and only return the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeviceSession.
     * @param {DeviceSessionDeleteArgs} args - Arguments to delete one DeviceSession.
     * @example
     * // Delete one DeviceSession
     * const DeviceSession = await prisma.deviceSession.delete({
     *   where: {
     *     // ... filter to delete one DeviceSession
     *   }
     * })
     * 
     */
    delete<T extends DeviceSessionDeleteArgs>(args: SelectSubset<T, DeviceSessionDeleteArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeviceSession.
     * @param {DeviceSessionUpdateArgs} args - Arguments to update one DeviceSession.
     * @example
     * // Update one DeviceSession
     * const deviceSession = await prisma.deviceSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceSessionUpdateArgs>(args: SelectSubset<T, DeviceSessionUpdateArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeviceSessions.
     * @param {DeviceSessionDeleteManyArgs} args - Arguments to filter DeviceSessions to delete.
     * @example
     * // Delete a few DeviceSessions
     * const { count } = await prisma.deviceSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceSessionDeleteManyArgs>(args?: SelectSubset<T, DeviceSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceSessions
     * const deviceSession = await prisma.deviceSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceSessionUpdateManyArgs>(args: SelectSubset<T, DeviceSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceSession.
     * @param {DeviceSessionUpsertArgs} args - Arguments to update or create a DeviceSession.
     * @example
     * // Update or create a DeviceSession
     * const deviceSession = await prisma.deviceSession.upsert({
     *   create: {
     *     // ... data to create a DeviceSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceSession we want to update
     *   }
     * })
     */
    upsert<T extends DeviceSessionUpsertArgs>(args: SelectSubset<T, DeviceSessionUpsertArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionCountArgs} args - Arguments to filter DeviceSessions to count.
     * @example
     * // Count the number of DeviceSessions
     * const count = await prisma.deviceSession.count({
     *   where: {
     *     // ... the filter for the DeviceSessions we want to count
     *   }
     * })
    **/
    count<T extends DeviceSessionCountArgs>(
      args?: Subset<T, DeviceSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceSessionAggregateArgs>(args: Subset<T, DeviceSessionAggregateArgs>): Prisma.PrismaPromise<GetDeviceSessionAggregateType<T>>

    /**
     * Group by DeviceSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceSessionGroupByArgs['orderBy'] }
        : { orderBy?: DeviceSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceSession model
   */
  readonly fields: DeviceSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    logs<T extends DeviceSession$logsArgs<ExtArgs> = {}>(args?: Subset<T, DeviceSession$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryExitLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceSession model
   */ 
  interface DeviceSessionFieldRefs {
    readonly id: FieldRef<"DeviceSession", 'Int'>
    readonly studentId: FieldRef<"DeviceSession", 'Int'>
    readonly deviceId: FieldRef<"DeviceSession", 'String'>
    readonly deviceName: FieldRef<"DeviceSession", 'String'>
    readonly ipAddress: FieldRef<"DeviceSession", 'String'>
    readonly latitude: FieldRef<"DeviceSession", 'Decimal'>
    readonly longitude: FieldRef<"DeviceSession", 'Decimal'>
    readonly createdAt: FieldRef<"DeviceSession", 'DateTime'>
    readonly lastSeen: FieldRef<"DeviceSession", 'DateTime'>
    readonly isActive: FieldRef<"DeviceSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DeviceSession findUnique
   */
  export type DeviceSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession findUniqueOrThrow
   */
  export type DeviceSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession findFirst
   */
  export type DeviceSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession findFirstOrThrow
   */
  export type DeviceSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession findMany
   */
  export type DeviceSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession create
   */
  export type DeviceSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceSession.
     */
    data: XOR<DeviceSessionCreateInput, DeviceSessionUncheckedCreateInput>
  }

  /**
   * DeviceSession createMany
   */
  export type DeviceSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionCreateManyInput | DeviceSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceSession createManyAndReturn
   */
  export type DeviceSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionCreateManyInput | DeviceSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSession update
   */
  export type DeviceSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceSession.
     */
    data: XOR<DeviceSessionUpdateInput, DeviceSessionUncheckedUpdateInput>
    /**
     * Choose, which DeviceSession to update.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession updateMany
   */
  export type DeviceSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionWhereInput
  }

  /**
   * DeviceSession upsert
   */
  export type DeviceSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceSession to update in case it exists.
     */
    where: DeviceSessionWhereUniqueInput
    /**
     * In case the DeviceSession found by the `where` argument doesn't exist, create a new DeviceSession with this data.
     */
    create: XOR<DeviceSessionCreateInput, DeviceSessionUncheckedCreateInput>
    /**
     * In case the DeviceSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceSessionUpdateInput, DeviceSessionUncheckedUpdateInput>
  }

  /**
   * DeviceSession delete
   */
  export type DeviceSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter which DeviceSession to delete.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession deleteMany
   */
  export type DeviceSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessions to delete
     */
    where?: DeviceSessionWhereInput
  }

  /**
   * DeviceSession.logs
   */
  export type DeviceSession$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryExitLog
     */
    select?: EntryExitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryExitLogInclude<ExtArgs> | null
    where?: EntryExitLogWhereInput
    orderBy?: EntryExitLogOrderByWithRelationInput | EntryExitLogOrderByWithRelationInput[]
    cursor?: EntryExitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryExitLogScalarFieldEnum | EntryExitLogScalarFieldEnum[]
  }

  /**
   * DeviceSession without action
   */
  export type DeviceSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
  }


  /**
   * Model GateConfig
   */

  export type AggregateGateConfig = {
    _count: GateConfigCountAggregateOutputType | null
    _avg: GateConfigAvgAggregateOutputType | null
    _sum: GateConfigSumAggregateOutputType | null
    _min: GateConfigMinAggregateOutputType | null
    _max: GateConfigMaxAggregateOutputType | null
  }

  export type GateConfigAvgAggregateOutputType = {
    id: number | null
    gateNo: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
  }

  export type GateConfigSumAggregateOutputType = {
    id: number | null
    gateNo: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
  }

  export type GateConfigMinAggregateOutputType = {
    id: number | null
    gateNo: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    isActive: boolean | null
  }

  export type GateConfigMaxAggregateOutputType = {
    id: number | null
    gateNo: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    isActive: boolean | null
  }

  export type GateConfigCountAggregateOutputType = {
    id: number
    gateNo: number
    latitude: number
    longitude: number
    radius: number
    isActive: number
    _all: number
  }


  export type GateConfigAvgAggregateInputType = {
    id?: true
    gateNo?: true
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type GateConfigSumAggregateInputType = {
    id?: true
    gateNo?: true
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type GateConfigMinAggregateInputType = {
    id?: true
    gateNo?: true
    latitude?: true
    longitude?: true
    radius?: true
    isActive?: true
  }

  export type GateConfigMaxAggregateInputType = {
    id?: true
    gateNo?: true
    latitude?: true
    longitude?: true
    radius?: true
    isActive?: true
  }

  export type GateConfigCountAggregateInputType = {
    id?: true
    gateNo?: true
    latitude?: true
    longitude?: true
    radius?: true
    isActive?: true
    _all?: true
  }

  export type GateConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GateConfig to aggregate.
     */
    where?: GateConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateConfigs to fetch.
     */
    orderBy?: GateConfigOrderByWithRelationInput | GateConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GateConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GateConfigs
    **/
    _count?: true | GateConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GateConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GateConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GateConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GateConfigMaxAggregateInputType
  }

  export type GetGateConfigAggregateType<T extends GateConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGateConfig[P]>
      : GetScalarType<T[P], AggregateGateConfig[P]>
  }




  export type GateConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GateConfigWhereInput
    orderBy?: GateConfigOrderByWithAggregationInput | GateConfigOrderByWithAggregationInput[]
    by: GateConfigScalarFieldEnum[] | GateConfigScalarFieldEnum
    having?: GateConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GateConfigCountAggregateInputType | true
    _avg?: GateConfigAvgAggregateInputType
    _sum?: GateConfigSumAggregateInputType
    _min?: GateConfigMinAggregateInputType
    _max?: GateConfigMaxAggregateInputType
  }

  export type GateConfigGroupByOutputType = {
    id: number
    gateNo: number
    latitude: Decimal
    longitude: Decimal
    radius: number
    isActive: boolean
    _count: GateConfigCountAggregateOutputType | null
    _avg: GateConfigAvgAggregateOutputType | null
    _sum: GateConfigSumAggregateOutputType | null
    _min: GateConfigMinAggregateOutputType | null
    _max: GateConfigMaxAggregateOutputType | null
  }

  type GetGateConfigGroupByPayload<T extends GateConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GateConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GateConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GateConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GateConfigGroupByOutputType[P]>
        }
      >
    >


  export type GateConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gateNo?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["gateConfig"]>

  export type GateConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gateNo?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["gateConfig"]>

  export type GateConfigSelectScalar = {
    id?: boolean
    gateNo?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    isActive?: boolean
  }


  export type $GateConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GateConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gateNo: number
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      radius: number
      isActive: boolean
    }, ExtArgs["result"]["gateConfig"]>
    composites: {}
  }

  type GateConfigGetPayload<S extends boolean | null | undefined | GateConfigDefaultArgs> = $Result.GetResult<Prisma.$GateConfigPayload, S>

  type GateConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GateConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GateConfigCountAggregateInputType | true
    }

  export interface GateConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GateConfig'], meta: { name: 'GateConfig' } }
    /**
     * Find zero or one GateConfig that matches the filter.
     * @param {GateConfigFindUniqueArgs} args - Arguments to find a GateConfig
     * @example
     * // Get one GateConfig
     * const gateConfig = await prisma.gateConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GateConfigFindUniqueArgs>(args: SelectSubset<T, GateConfigFindUniqueArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GateConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GateConfigFindUniqueOrThrowArgs} args - Arguments to find a GateConfig
     * @example
     * // Get one GateConfig
     * const gateConfig = await prisma.gateConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GateConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GateConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GateConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigFindFirstArgs} args - Arguments to find a GateConfig
     * @example
     * // Get one GateConfig
     * const gateConfig = await prisma.gateConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GateConfigFindFirstArgs>(args?: SelectSubset<T, GateConfigFindFirstArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GateConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigFindFirstOrThrowArgs} args - Arguments to find a GateConfig
     * @example
     * // Get one GateConfig
     * const gateConfig = await prisma.gateConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GateConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GateConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GateConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GateConfigs
     * const gateConfigs = await prisma.gateConfig.findMany()
     * 
     * // Get first 10 GateConfigs
     * const gateConfigs = await prisma.gateConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gateConfigWithIdOnly = await prisma.gateConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GateConfigFindManyArgs>(args?: SelectSubset<T, GateConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GateConfig.
     * @param {GateConfigCreateArgs} args - Arguments to create a GateConfig.
     * @example
     * // Create one GateConfig
     * const GateConfig = await prisma.gateConfig.create({
     *   data: {
     *     // ... data to create a GateConfig
     *   }
     * })
     * 
     */
    create<T extends GateConfigCreateArgs>(args: SelectSubset<T, GateConfigCreateArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GateConfigs.
     * @param {GateConfigCreateManyArgs} args - Arguments to create many GateConfigs.
     * @example
     * // Create many GateConfigs
     * const gateConfig = await prisma.gateConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GateConfigCreateManyArgs>(args?: SelectSubset<T, GateConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GateConfigs and returns the data saved in the database.
     * @param {GateConfigCreateManyAndReturnArgs} args - Arguments to create many GateConfigs.
     * @example
     * // Create many GateConfigs
     * const gateConfig = await prisma.gateConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GateConfigs and only return the `id`
     * const gateConfigWithIdOnly = await prisma.gateConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GateConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GateConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GateConfig.
     * @param {GateConfigDeleteArgs} args - Arguments to delete one GateConfig.
     * @example
     * // Delete one GateConfig
     * const GateConfig = await prisma.gateConfig.delete({
     *   where: {
     *     // ... filter to delete one GateConfig
     *   }
     * })
     * 
     */
    delete<T extends GateConfigDeleteArgs>(args: SelectSubset<T, GateConfigDeleteArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GateConfig.
     * @param {GateConfigUpdateArgs} args - Arguments to update one GateConfig.
     * @example
     * // Update one GateConfig
     * const gateConfig = await prisma.gateConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GateConfigUpdateArgs>(args: SelectSubset<T, GateConfigUpdateArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GateConfigs.
     * @param {GateConfigDeleteManyArgs} args - Arguments to filter GateConfigs to delete.
     * @example
     * // Delete a few GateConfigs
     * const { count } = await prisma.gateConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GateConfigDeleteManyArgs>(args?: SelectSubset<T, GateConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GateConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GateConfigs
     * const gateConfig = await prisma.gateConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GateConfigUpdateManyArgs>(args: SelectSubset<T, GateConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GateConfig.
     * @param {GateConfigUpsertArgs} args - Arguments to update or create a GateConfig.
     * @example
     * // Update or create a GateConfig
     * const gateConfig = await prisma.gateConfig.upsert({
     *   create: {
     *     // ... data to create a GateConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GateConfig we want to update
     *   }
     * })
     */
    upsert<T extends GateConfigUpsertArgs>(args: SelectSubset<T, GateConfigUpsertArgs<ExtArgs>>): Prisma__GateConfigClient<$Result.GetResult<Prisma.$GateConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GateConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigCountArgs} args - Arguments to filter GateConfigs to count.
     * @example
     * // Count the number of GateConfigs
     * const count = await prisma.gateConfig.count({
     *   where: {
     *     // ... the filter for the GateConfigs we want to count
     *   }
     * })
    **/
    count<T extends GateConfigCountArgs>(
      args?: Subset<T, GateConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GateConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GateConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GateConfigAggregateArgs>(args: Subset<T, GateConfigAggregateArgs>): Prisma.PrismaPromise<GetGateConfigAggregateType<T>>

    /**
     * Group by GateConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GateConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GateConfigGroupByArgs['orderBy'] }
        : { orderBy?: GateConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GateConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGateConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GateConfig model
   */
  readonly fields: GateConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GateConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GateConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GateConfig model
   */ 
  interface GateConfigFieldRefs {
    readonly id: FieldRef<"GateConfig", 'Int'>
    readonly gateNo: FieldRef<"GateConfig", 'Int'>
    readonly latitude: FieldRef<"GateConfig", 'Decimal'>
    readonly longitude: FieldRef<"GateConfig", 'Decimal'>
    readonly radius: FieldRef<"GateConfig", 'Int'>
    readonly isActive: FieldRef<"GateConfig", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GateConfig findUnique
   */
  export type GateConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * Filter, which GateConfig to fetch.
     */
    where: GateConfigWhereUniqueInput
  }

  /**
   * GateConfig findUniqueOrThrow
   */
  export type GateConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * Filter, which GateConfig to fetch.
     */
    where: GateConfigWhereUniqueInput
  }

  /**
   * GateConfig findFirst
   */
  export type GateConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * Filter, which GateConfig to fetch.
     */
    where?: GateConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateConfigs to fetch.
     */
    orderBy?: GateConfigOrderByWithRelationInput | GateConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GateConfigs.
     */
    cursor?: GateConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GateConfigs.
     */
    distinct?: GateConfigScalarFieldEnum | GateConfigScalarFieldEnum[]
  }

  /**
   * GateConfig findFirstOrThrow
   */
  export type GateConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * Filter, which GateConfig to fetch.
     */
    where?: GateConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateConfigs to fetch.
     */
    orderBy?: GateConfigOrderByWithRelationInput | GateConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GateConfigs.
     */
    cursor?: GateConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GateConfigs.
     */
    distinct?: GateConfigScalarFieldEnum | GateConfigScalarFieldEnum[]
  }

  /**
   * GateConfig findMany
   */
  export type GateConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * Filter, which GateConfigs to fetch.
     */
    where?: GateConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateConfigs to fetch.
     */
    orderBy?: GateConfigOrderByWithRelationInput | GateConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GateConfigs.
     */
    cursor?: GateConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateConfigs.
     */
    skip?: number
    distinct?: GateConfigScalarFieldEnum | GateConfigScalarFieldEnum[]
  }

  /**
   * GateConfig create
   */
  export type GateConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a GateConfig.
     */
    data: XOR<GateConfigCreateInput, GateConfigUncheckedCreateInput>
  }

  /**
   * GateConfig createMany
   */
  export type GateConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GateConfigs.
     */
    data: GateConfigCreateManyInput | GateConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GateConfig createManyAndReturn
   */
  export type GateConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GateConfigs.
     */
    data: GateConfigCreateManyInput | GateConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GateConfig update
   */
  export type GateConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a GateConfig.
     */
    data: XOR<GateConfigUpdateInput, GateConfigUncheckedUpdateInput>
    /**
     * Choose, which GateConfig to update.
     */
    where: GateConfigWhereUniqueInput
  }

  /**
   * GateConfig updateMany
   */
  export type GateConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GateConfigs.
     */
    data: XOR<GateConfigUpdateManyMutationInput, GateConfigUncheckedUpdateManyInput>
    /**
     * Filter which GateConfigs to update
     */
    where?: GateConfigWhereInput
  }

  /**
   * GateConfig upsert
   */
  export type GateConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the GateConfig to update in case it exists.
     */
    where: GateConfigWhereUniqueInput
    /**
     * In case the GateConfig found by the `where` argument doesn't exist, create a new GateConfig with this data.
     */
    create: XOR<GateConfigCreateInput, GateConfigUncheckedCreateInput>
    /**
     * In case the GateConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GateConfigUpdateInput, GateConfigUncheckedUpdateInput>
  }

  /**
   * GateConfig delete
   */
  export type GateConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
    /**
     * Filter which GateConfig to delete.
     */
    where: GateConfigWhereUniqueInput
  }

  /**
   * GateConfig deleteMany
   */
  export type GateConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GateConfigs to delete
     */
    where?: GateConfigWhereInput
  }

  /**
   * GateConfig without action
   */
  export type GateConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateConfig
     */
    select?: GateConfigSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    mobileNo: 'mobileNo',
    roomNo: 'roomNo',
    gender: 'gender',
    departmentId: 'departmentId',
    currentStatus: 'currentStatus'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const EntryExitLogScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    deviceSessionId: 'deviceSessionId',
    requestType: 'requestType',
    requestTime: 'requestTime',
    approvalStatus: 'approvalStatus',
    approvalTime: 'approvalTime',
    latitude: 'latitude',
    longitude: 'longitude',
    locationValid: 'locationValid',
    suspicious: 'suspicious',
    adminId: 'adminId'
  };

  export type EntryExitLogScalarFieldEnum = (typeof EntryExitLogScalarFieldEnum)[keyof typeof EntryExitLogScalarFieldEnum]


  export const DeviceSessionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    deviceId: 'deviceId',
    deviceName: 'deviceName',
    ipAddress: 'ipAddress',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    lastSeen: 'lastSeen',
    isActive: 'isActive'
  };

  export type DeviceSessionScalarFieldEnum = (typeof DeviceSessionScalarFieldEnum)[keyof typeof DeviceSessionScalarFieldEnum]


  export const GateConfigScalarFieldEnum: {
    id: 'id',
    gateNo: 'gateNo',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    isActive: 'isActive'
  };

  export type GateConfigScalarFieldEnum = (typeof GateConfigScalarFieldEnum)[keyof typeof GateConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'StudentStatus'
   */
  export type EnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus'>
    


  /**
   * Reference to a field of type 'StudentStatus[]'
   */
  export type ListEnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus[]'>
    


  /**
   * Reference to a field of type 'RequestType'
   */
  export type EnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType'>
    


  /**
   * Reference to a field of type 'RequestType[]'
   */
  export type ListEnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    students?: StudentListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    students?: StudentListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    mobileNo?: StringFilter<"Student"> | string
    roomNo?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    departmentId?: IntFilter<"Student"> | number
    currentStatus?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    sessions?: DeviceSessionListRelationFilter
    logs?: EntryExitLogListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    mobileNo?: SortOrder
    roomNo?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
    currentStatus?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    sessions?: DeviceSessionOrderByRelationAggregateInput
    logs?: EntryExitLogOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    password?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    mobileNo?: StringFilter<"Student"> | string
    roomNo?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    departmentId?: IntFilter<"Student"> | number
    currentStatus?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    sessions?: DeviceSessionListRelationFilter
    logs?: EntryExitLogListRelationFilter
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    mobileNo?: SortOrder
    roomNo?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
    currentStatus?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    email?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    mobileNo?: StringWithAggregatesFilter<"Student"> | string
    roomNo?: StringWithAggregatesFilter<"Student"> | string
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    departmentId?: IntWithAggregatesFilter<"Student"> | number
    currentStatus?: EnumStudentStatusWithAggregatesFilter<"Student"> | $Enums.StudentStatus
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    logs?: EntryExitLogListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    logs?: EntryExitLogOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    logs?: EntryExitLogListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type EntryExitLogWhereInput = {
    AND?: EntryExitLogWhereInput | EntryExitLogWhereInput[]
    OR?: EntryExitLogWhereInput[]
    NOT?: EntryExitLogWhereInput | EntryExitLogWhereInput[]
    id?: IntFilter<"EntryExitLog"> | number
    studentId?: IntFilter<"EntryExitLog"> | number
    deviceSessionId?: IntNullableFilter<"EntryExitLog"> | number | null
    requestType?: EnumRequestTypeFilter<"EntryExitLog"> | $Enums.RequestType
    requestTime?: DateTimeFilter<"EntryExitLog"> | Date | string
    approvalStatus?: EnumApprovalStatusFilter<"EntryExitLog"> | $Enums.ApprovalStatus
    approvalTime?: DateTimeNullableFilter<"EntryExitLog"> | Date | string | null
    latitude?: DecimalFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFilter<"EntryExitLog"> | boolean
    suspicious?: BoolFilter<"EntryExitLog"> | boolean
    adminId?: IntNullableFilter<"EntryExitLog"> | number | null
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    deviceSession?: XOR<DeviceSessionNullableRelationFilter, DeviceSessionWhereInput> | null
  }

  export type EntryExitLogOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrderInput | SortOrder
    requestType?: SortOrder
    requestTime?: SortOrder
    approvalStatus?: SortOrder
    approvalTime?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationValid?: SortOrder
    suspicious?: SortOrder
    adminId?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    deviceSession?: DeviceSessionOrderByWithRelationInput
  }

  export type EntryExitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntryExitLogWhereInput | EntryExitLogWhereInput[]
    OR?: EntryExitLogWhereInput[]
    NOT?: EntryExitLogWhereInput | EntryExitLogWhereInput[]
    studentId?: IntFilter<"EntryExitLog"> | number
    deviceSessionId?: IntNullableFilter<"EntryExitLog"> | number | null
    requestType?: EnumRequestTypeFilter<"EntryExitLog"> | $Enums.RequestType
    requestTime?: DateTimeFilter<"EntryExitLog"> | Date | string
    approvalStatus?: EnumApprovalStatusFilter<"EntryExitLog"> | $Enums.ApprovalStatus
    approvalTime?: DateTimeNullableFilter<"EntryExitLog"> | Date | string | null
    latitude?: DecimalFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFilter<"EntryExitLog"> | boolean
    suspicious?: BoolFilter<"EntryExitLog"> | boolean
    adminId?: IntNullableFilter<"EntryExitLog"> | number | null
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    deviceSession?: XOR<DeviceSessionNullableRelationFilter, DeviceSessionWhereInput> | null
  }, "id">

  export type EntryExitLogOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrderInput | SortOrder
    requestType?: SortOrder
    requestTime?: SortOrder
    approvalStatus?: SortOrder
    approvalTime?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationValid?: SortOrder
    suspicious?: SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: EntryExitLogCountOrderByAggregateInput
    _avg?: EntryExitLogAvgOrderByAggregateInput
    _max?: EntryExitLogMaxOrderByAggregateInput
    _min?: EntryExitLogMinOrderByAggregateInput
    _sum?: EntryExitLogSumOrderByAggregateInput
  }

  export type EntryExitLogScalarWhereWithAggregatesInput = {
    AND?: EntryExitLogScalarWhereWithAggregatesInput | EntryExitLogScalarWhereWithAggregatesInput[]
    OR?: EntryExitLogScalarWhereWithAggregatesInput[]
    NOT?: EntryExitLogScalarWhereWithAggregatesInput | EntryExitLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EntryExitLog"> | number
    studentId?: IntWithAggregatesFilter<"EntryExitLog"> | number
    deviceSessionId?: IntNullableWithAggregatesFilter<"EntryExitLog"> | number | null
    requestType?: EnumRequestTypeWithAggregatesFilter<"EntryExitLog"> | $Enums.RequestType
    requestTime?: DateTimeWithAggregatesFilter<"EntryExitLog"> | Date | string
    approvalStatus?: EnumApprovalStatusWithAggregatesFilter<"EntryExitLog"> | $Enums.ApprovalStatus
    approvalTime?: DateTimeNullableWithAggregatesFilter<"EntryExitLog"> | Date | string | null
    latitude?: DecimalWithAggregatesFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    locationValid?: BoolWithAggregatesFilter<"EntryExitLog"> | boolean
    suspicious?: BoolWithAggregatesFilter<"EntryExitLog"> | boolean
    adminId?: IntNullableWithAggregatesFilter<"EntryExitLog"> | number | null
  }

  export type DeviceSessionWhereInput = {
    AND?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    OR?: DeviceSessionWhereInput[]
    NOT?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    id?: IntFilter<"DeviceSession"> | number
    studentId?: IntFilter<"DeviceSession"> | number
    deviceId?: StringFilter<"DeviceSession"> | string
    deviceName?: StringFilter<"DeviceSession"> | string
    ipAddress?: StringFilter<"DeviceSession"> | string
    latitude?: DecimalFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    lastSeen?: DateTimeFilter<"DeviceSession"> | Date | string
    isActive?: BoolFilter<"DeviceSession"> | boolean
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    logs?: EntryExitLogListRelationFilter
  }

  export type DeviceSessionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    student?: StudentOrderByWithRelationInput
    logs?: EntryExitLogOrderByRelationAggregateInput
  }

  export type DeviceSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_deviceId?: DeviceSessionStudentIdDeviceIdCompoundUniqueInput
    AND?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    OR?: DeviceSessionWhereInput[]
    NOT?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    studentId?: IntFilter<"DeviceSession"> | number
    deviceId?: StringFilter<"DeviceSession"> | string
    deviceName?: StringFilter<"DeviceSession"> | string
    ipAddress?: StringFilter<"DeviceSession"> | string
    latitude?: DecimalFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    lastSeen?: DateTimeFilter<"DeviceSession"> | Date | string
    isActive?: BoolFilter<"DeviceSession"> | boolean
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    logs?: EntryExitLogListRelationFilter
  }, "id" | "studentId_deviceId">

  export type DeviceSessionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    _count?: DeviceSessionCountOrderByAggregateInput
    _avg?: DeviceSessionAvgOrderByAggregateInput
    _max?: DeviceSessionMaxOrderByAggregateInput
    _min?: DeviceSessionMinOrderByAggregateInput
    _sum?: DeviceSessionSumOrderByAggregateInput
  }

  export type DeviceSessionScalarWhereWithAggregatesInput = {
    AND?: DeviceSessionScalarWhereWithAggregatesInput | DeviceSessionScalarWhereWithAggregatesInput[]
    OR?: DeviceSessionScalarWhereWithAggregatesInput[]
    NOT?: DeviceSessionScalarWhereWithAggregatesInput | DeviceSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceSession"> | number
    studentId?: IntWithAggregatesFilter<"DeviceSession"> | number
    deviceId?: StringWithAggregatesFilter<"DeviceSession"> | string
    deviceName?: StringWithAggregatesFilter<"DeviceSession"> | string
    ipAddress?: StringWithAggregatesFilter<"DeviceSession"> | string
    latitude?: DecimalWithAggregatesFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
    lastSeen?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
    isActive?: BoolWithAggregatesFilter<"DeviceSession"> | boolean
  }

  export type GateConfigWhereInput = {
    AND?: GateConfigWhereInput | GateConfigWhereInput[]
    OR?: GateConfigWhereInput[]
    NOT?: GateConfigWhereInput | GateConfigWhereInput[]
    id?: IntFilter<"GateConfig"> | number
    gateNo?: IntFilter<"GateConfig"> | number
    latitude?: DecimalFilter<"GateConfig"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"GateConfig"> | Decimal | DecimalJsLike | number | string
    radius?: IntFilter<"GateConfig"> | number
    isActive?: BoolFilter<"GateConfig"> | boolean
  }

  export type GateConfigOrderByWithRelationInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    isActive?: SortOrder
  }

  export type GateConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GateConfigWhereInput | GateConfigWhereInput[]
    OR?: GateConfigWhereInput[]
    NOT?: GateConfigWhereInput | GateConfigWhereInput[]
    gateNo?: IntFilter<"GateConfig"> | number
    latitude?: DecimalFilter<"GateConfig"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"GateConfig"> | Decimal | DecimalJsLike | number | string
    radius?: IntFilter<"GateConfig"> | number
    isActive?: BoolFilter<"GateConfig"> | boolean
  }, "id">

  export type GateConfigOrderByWithAggregationInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    isActive?: SortOrder
    _count?: GateConfigCountOrderByAggregateInput
    _avg?: GateConfigAvgOrderByAggregateInput
    _max?: GateConfigMaxOrderByAggregateInput
    _min?: GateConfigMinOrderByAggregateInput
    _sum?: GateConfigSumOrderByAggregateInput
  }

  export type GateConfigScalarWhereWithAggregatesInput = {
    AND?: GateConfigScalarWhereWithAggregatesInput | GateConfigScalarWhereWithAggregatesInput[]
    OR?: GateConfigScalarWhereWithAggregatesInput[]
    NOT?: GateConfigScalarWhereWithAggregatesInput | GateConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GateConfig"> | number
    gateNo?: IntWithAggregatesFilter<"GateConfig"> | number
    latitude?: DecimalWithAggregatesFilter<"GateConfig"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"GateConfig"> | Decimal | DecimalJsLike | number | string
    radius?: IntWithAggregatesFilter<"GateConfig"> | number
    isActive?: BoolWithAggregatesFilter<"GateConfig"> | boolean
  }

  export type DepartmentCreateInput = {
    name: string
    students?: StudentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    name: string
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    currentStatus?: $Enums.StudentStatus
    department: DepartmentCreateNestedOneWithoutStudentsInput
    sessions?: DeviceSessionCreateNestedManyWithoutStudentInput
    logs?: EntryExitLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    departmentId: number
    currentStatus?: $Enums.StudentStatus
    sessions?: DeviceSessionUncheckedCreateNestedManyWithoutStudentInput
    logs?: EntryExitLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    department?: DepartmentUpdateOneRequiredWithoutStudentsNestedInput
    sessions?: DeviceSessionUpdateManyWithoutStudentNestedInput
    logs?: EntryExitLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    departmentId?: IntFieldUpdateOperationsInput | number
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    sessions?: DeviceSessionUncheckedUpdateManyWithoutStudentNestedInput
    logs?: EntryExitLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    departmentId: number
    currentStatus?: $Enums.StudentStatus
  }

  export type StudentUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    departmentId?: IntFieldUpdateOperationsInput | number
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    logs?: EntryExitLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    logs?: EntryExitLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    logs?: EntryExitLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    logs?: EntryExitLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EntryExitLogCreateInput = {
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    student: StudentCreateNestedOneWithoutLogsInput
    admin?: AdminCreateNestedOneWithoutLogsInput
    deviceSession?: DeviceSessionCreateNestedOneWithoutLogsInput
  }

  export type EntryExitLogUncheckedCreateInput = {
    id?: number
    studentId: number
    deviceSessionId?: number | null
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    adminId?: number | null
  }

  export type EntryExitLogUpdateInput = {
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutLogsNestedInput
    admin?: AdminUpdateOneWithoutLogsNestedInput
    deviceSession?: DeviceSessionUpdateOneWithoutLogsNestedInput
  }

  export type EntryExitLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceSessionId?: NullableIntFieldUpdateOperationsInput | number | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EntryExitLogCreateManyInput = {
    id?: number
    studentId: number
    deviceSessionId?: number | null
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    adminId?: number | null
  }

  export type EntryExitLogUpdateManyMutationInput = {
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryExitLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceSessionId?: NullableIntFieldUpdateOperationsInput | number | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeviceSessionCreateInput = {
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
    student: StudentCreateNestedOneWithoutSessionsInput
    logs?: EntryExitLogCreateNestedManyWithoutDeviceSessionInput
  }

  export type DeviceSessionUncheckedCreateInput = {
    id?: number
    studentId: number
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
    logs?: EntryExitLogUncheckedCreateNestedManyWithoutDeviceSessionInput
  }

  export type DeviceSessionUpdateInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutSessionsNestedInput
    logs?: EntryExitLogUpdateManyWithoutDeviceSessionNestedInput
  }

  export type DeviceSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    logs?: EntryExitLogUncheckedUpdateManyWithoutDeviceSessionNestedInput
  }

  export type DeviceSessionCreateManyInput = {
    id?: number
    studentId: number
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
  }

  export type DeviceSessionUpdateManyMutationInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GateConfigCreateInput = {
    gateNo: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius: number
    isActive?: boolean
  }

  export type GateConfigUncheckedCreateInput = {
    id?: number
    gateNo: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius: number
    isActive?: boolean
  }

  export type GateConfigUpdateInput = {
    gateNo?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GateConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gateNo?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GateConfigCreateManyInput = {
    id?: number
    gateNo: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius: number
    isActive?: boolean
  }

  export type GateConfigUpdateManyMutationInput = {
    gateNo?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GateConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gateNo?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type DeviceSessionListRelationFilter = {
    every?: DeviceSessionWhereInput
    some?: DeviceSessionWhereInput
    none?: DeviceSessionWhereInput
  }

  export type EntryExitLogListRelationFilter = {
    every?: EntryExitLogWhereInput
    some?: EntryExitLogWhereInput
    none?: EntryExitLogWhereInput
  }

  export type DeviceSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntryExitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    mobileNo?: SortOrder
    roomNo?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
    currentStatus?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    mobileNo?: SortOrder
    roomNo?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
    currentStatus?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    mobileNo?: SortOrder
    roomNo?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
    currentStatus?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type DeviceSessionNullableRelationFilter = {
    is?: DeviceSessionWhereInput | null
    isNot?: DeviceSessionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EntryExitLogCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrder
    requestType?: SortOrder
    requestTime?: SortOrder
    approvalStatus?: SortOrder
    approvalTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationValid?: SortOrder
    suspicious?: SortOrder
    adminId?: SortOrder
  }

  export type EntryExitLogAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
  }

  export type EntryExitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrder
    requestType?: SortOrder
    requestTime?: SortOrder
    approvalStatus?: SortOrder
    approvalTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationValid?: SortOrder
    suspicious?: SortOrder
    adminId?: SortOrder
  }

  export type EntryExitLogMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrder
    requestType?: SortOrder
    requestTime?: SortOrder
    approvalStatus?: SortOrder
    approvalTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationValid?: SortOrder
    suspicious?: SortOrder
    adminId?: SortOrder
  }

  export type EntryExitLogSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceSessionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    adminId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DeviceSessionStudentIdDeviceIdCompoundUniqueInput = {
    studentId: number
    deviceId: string
  }

  export type DeviceSessionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
  }

  export type DeviceSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DeviceSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
  }

  export type DeviceSessionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
  }

  export type DeviceSessionSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GateConfigCountOrderByAggregateInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    isActive?: SortOrder
  }

  export type GateConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type GateConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    isActive?: SortOrder
  }

  export type GateConfigMinOrderByAggregateInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    isActive?: SortOrder
  }

  export type GateConfigSumOrderByAggregateInput = {
    id?: SortOrder
    gateNo?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type StudentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StudentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutDepartmentInput | StudentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutDepartmentInput | StudentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutDepartmentInput | StudentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutDepartmentInput | StudentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutDepartmentInput | StudentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutDepartmentInput | StudentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutStudentsInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DeviceSessionCreateNestedManyWithoutStudentInput = {
    create?: XOR<DeviceSessionCreateWithoutStudentInput, DeviceSessionUncheckedCreateWithoutStudentInput> | DeviceSessionCreateWithoutStudentInput[] | DeviceSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutStudentInput | DeviceSessionCreateOrConnectWithoutStudentInput[]
    createMany?: DeviceSessionCreateManyStudentInputEnvelope
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
  }

  export type EntryExitLogCreateNestedManyWithoutStudentInput = {
    create?: XOR<EntryExitLogCreateWithoutStudentInput, EntryExitLogUncheckedCreateWithoutStudentInput> | EntryExitLogCreateWithoutStudentInput[] | EntryExitLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutStudentInput | EntryExitLogCreateOrConnectWithoutStudentInput[]
    createMany?: EntryExitLogCreateManyStudentInputEnvelope
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
  }

  export type DeviceSessionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<DeviceSessionCreateWithoutStudentInput, DeviceSessionUncheckedCreateWithoutStudentInput> | DeviceSessionCreateWithoutStudentInput[] | DeviceSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutStudentInput | DeviceSessionCreateOrConnectWithoutStudentInput[]
    createMany?: DeviceSessionCreateManyStudentInputEnvelope
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
  }

  export type EntryExitLogUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EntryExitLogCreateWithoutStudentInput, EntryExitLogUncheckedCreateWithoutStudentInput> | EntryExitLogCreateWithoutStudentInput[] | EntryExitLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutStudentInput | EntryExitLogCreateOrConnectWithoutStudentInput[]
    createMany?: EntryExitLogCreateManyStudentInputEnvelope
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumStudentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentStatus
  }

  export type DepartmentUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    upsert?: DepartmentUpsertWithoutStudentsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutStudentsInput, DepartmentUpdateWithoutStudentsInput>, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type DeviceSessionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutStudentInput, DeviceSessionUncheckedCreateWithoutStudentInput> | DeviceSessionCreateWithoutStudentInput[] | DeviceSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutStudentInput | DeviceSessionCreateOrConnectWithoutStudentInput[]
    upsert?: DeviceSessionUpsertWithWhereUniqueWithoutStudentInput | DeviceSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DeviceSessionCreateManyStudentInputEnvelope
    set?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    disconnect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    delete?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    update?: DeviceSessionUpdateWithWhereUniqueWithoutStudentInput | DeviceSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DeviceSessionUpdateManyWithWhereWithoutStudentInput | DeviceSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
  }

  export type EntryExitLogUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EntryExitLogCreateWithoutStudentInput, EntryExitLogUncheckedCreateWithoutStudentInput> | EntryExitLogCreateWithoutStudentInput[] | EntryExitLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutStudentInput | EntryExitLogCreateOrConnectWithoutStudentInput[]
    upsert?: EntryExitLogUpsertWithWhereUniqueWithoutStudentInput | EntryExitLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EntryExitLogCreateManyStudentInputEnvelope
    set?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    disconnect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    delete?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    update?: EntryExitLogUpdateWithWhereUniqueWithoutStudentInput | EntryExitLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EntryExitLogUpdateManyWithWhereWithoutStudentInput | EntryExitLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
  }

  export type DeviceSessionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutStudentInput, DeviceSessionUncheckedCreateWithoutStudentInput> | DeviceSessionCreateWithoutStudentInput[] | DeviceSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutStudentInput | DeviceSessionCreateOrConnectWithoutStudentInput[]
    upsert?: DeviceSessionUpsertWithWhereUniqueWithoutStudentInput | DeviceSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DeviceSessionCreateManyStudentInputEnvelope
    set?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    disconnect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    delete?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    update?: DeviceSessionUpdateWithWhereUniqueWithoutStudentInput | DeviceSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DeviceSessionUpdateManyWithWhereWithoutStudentInput | DeviceSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
  }

  export type EntryExitLogUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EntryExitLogCreateWithoutStudentInput, EntryExitLogUncheckedCreateWithoutStudentInput> | EntryExitLogCreateWithoutStudentInput[] | EntryExitLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutStudentInput | EntryExitLogCreateOrConnectWithoutStudentInput[]
    upsert?: EntryExitLogUpsertWithWhereUniqueWithoutStudentInput | EntryExitLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EntryExitLogCreateManyStudentInputEnvelope
    set?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    disconnect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    delete?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    update?: EntryExitLogUpdateWithWhereUniqueWithoutStudentInput | EntryExitLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EntryExitLogUpdateManyWithWhereWithoutStudentInput | EntryExitLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
  }

  export type EntryExitLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<EntryExitLogCreateWithoutAdminInput, EntryExitLogUncheckedCreateWithoutAdminInput> | EntryExitLogCreateWithoutAdminInput[] | EntryExitLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutAdminInput | EntryExitLogCreateOrConnectWithoutAdminInput[]
    createMany?: EntryExitLogCreateManyAdminInputEnvelope
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
  }

  export type EntryExitLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<EntryExitLogCreateWithoutAdminInput, EntryExitLogUncheckedCreateWithoutAdminInput> | EntryExitLogCreateWithoutAdminInput[] | EntryExitLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutAdminInput | EntryExitLogCreateOrConnectWithoutAdminInput[]
    createMany?: EntryExitLogCreateManyAdminInputEnvelope
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
  }

  export type EntryExitLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<EntryExitLogCreateWithoutAdminInput, EntryExitLogUncheckedCreateWithoutAdminInput> | EntryExitLogCreateWithoutAdminInput[] | EntryExitLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutAdminInput | EntryExitLogCreateOrConnectWithoutAdminInput[]
    upsert?: EntryExitLogUpsertWithWhereUniqueWithoutAdminInput | EntryExitLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: EntryExitLogCreateManyAdminInputEnvelope
    set?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    disconnect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    delete?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    update?: EntryExitLogUpdateWithWhereUniqueWithoutAdminInput | EntryExitLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: EntryExitLogUpdateManyWithWhereWithoutAdminInput | EntryExitLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
  }

  export type EntryExitLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<EntryExitLogCreateWithoutAdminInput, EntryExitLogUncheckedCreateWithoutAdminInput> | EntryExitLogCreateWithoutAdminInput[] | EntryExitLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutAdminInput | EntryExitLogCreateOrConnectWithoutAdminInput[]
    upsert?: EntryExitLogUpsertWithWhereUniqueWithoutAdminInput | EntryExitLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: EntryExitLogCreateManyAdminInputEnvelope
    set?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    disconnect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    delete?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    update?: EntryExitLogUpdateWithWhereUniqueWithoutAdminInput | EntryExitLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: EntryExitLogUpdateManyWithWhereWithoutAdminInput | EntryExitLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutLogsInput = {
    create?: XOR<StudentCreateWithoutLogsInput, StudentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutLogsInput
    connect?: StudentWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutLogsInput = {
    create?: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type DeviceSessionCreateNestedOneWithoutLogsInput = {
    create?: XOR<DeviceSessionCreateWithoutLogsInput, DeviceSessionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutLogsInput
    connect?: DeviceSessionWhereUniqueInput
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<StudentCreateWithoutLogsInput, StudentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutLogsInput
    upsert?: StudentUpsertWithoutLogsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutLogsInput, StudentUpdateWithoutLogsInput>, StudentUncheckedUpdateWithoutLogsInput>
  }

  export type AdminUpdateOneWithoutLogsNestedInput = {
    create?: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutLogsInput
    upsert?: AdminUpsertWithoutLogsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutLogsInput, AdminUpdateWithoutLogsInput>, AdminUncheckedUpdateWithoutLogsInput>
  }

  export type DeviceSessionUpdateOneWithoutLogsNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutLogsInput, DeviceSessionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutLogsInput
    upsert?: DeviceSessionUpsertWithoutLogsInput
    disconnect?: DeviceSessionWhereInput | boolean
    delete?: DeviceSessionWhereInput | boolean
    connect?: DeviceSessionWhereUniqueInput
    update?: XOR<XOR<DeviceSessionUpdateToOneWithWhereWithoutLogsInput, DeviceSessionUpdateWithoutLogsInput>, DeviceSessionUncheckedUpdateWithoutLogsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentCreateNestedOneWithoutSessionsInput = {
    create?: XOR<StudentCreateWithoutSessionsInput, StudentUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSessionsInput
    connect?: StudentWhereUniqueInput
  }

  export type EntryExitLogCreateNestedManyWithoutDeviceSessionInput = {
    create?: XOR<EntryExitLogCreateWithoutDeviceSessionInput, EntryExitLogUncheckedCreateWithoutDeviceSessionInput> | EntryExitLogCreateWithoutDeviceSessionInput[] | EntryExitLogUncheckedCreateWithoutDeviceSessionInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutDeviceSessionInput | EntryExitLogCreateOrConnectWithoutDeviceSessionInput[]
    createMany?: EntryExitLogCreateManyDeviceSessionInputEnvelope
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
  }

  export type EntryExitLogUncheckedCreateNestedManyWithoutDeviceSessionInput = {
    create?: XOR<EntryExitLogCreateWithoutDeviceSessionInput, EntryExitLogUncheckedCreateWithoutDeviceSessionInput> | EntryExitLogCreateWithoutDeviceSessionInput[] | EntryExitLogUncheckedCreateWithoutDeviceSessionInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutDeviceSessionInput | EntryExitLogCreateOrConnectWithoutDeviceSessionInput[]
    createMany?: EntryExitLogCreateManyDeviceSessionInputEnvelope
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<StudentCreateWithoutSessionsInput, StudentUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSessionsInput
    upsert?: StudentUpsertWithoutSessionsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSessionsInput, StudentUpdateWithoutSessionsInput>, StudentUncheckedUpdateWithoutSessionsInput>
  }

  export type EntryExitLogUpdateManyWithoutDeviceSessionNestedInput = {
    create?: XOR<EntryExitLogCreateWithoutDeviceSessionInput, EntryExitLogUncheckedCreateWithoutDeviceSessionInput> | EntryExitLogCreateWithoutDeviceSessionInput[] | EntryExitLogUncheckedCreateWithoutDeviceSessionInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutDeviceSessionInput | EntryExitLogCreateOrConnectWithoutDeviceSessionInput[]
    upsert?: EntryExitLogUpsertWithWhereUniqueWithoutDeviceSessionInput | EntryExitLogUpsertWithWhereUniqueWithoutDeviceSessionInput[]
    createMany?: EntryExitLogCreateManyDeviceSessionInputEnvelope
    set?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    disconnect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    delete?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    update?: EntryExitLogUpdateWithWhereUniqueWithoutDeviceSessionInput | EntryExitLogUpdateWithWhereUniqueWithoutDeviceSessionInput[]
    updateMany?: EntryExitLogUpdateManyWithWhereWithoutDeviceSessionInput | EntryExitLogUpdateManyWithWhereWithoutDeviceSessionInput[]
    deleteMany?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
  }

  export type EntryExitLogUncheckedUpdateManyWithoutDeviceSessionNestedInput = {
    create?: XOR<EntryExitLogCreateWithoutDeviceSessionInput, EntryExitLogUncheckedCreateWithoutDeviceSessionInput> | EntryExitLogCreateWithoutDeviceSessionInput[] | EntryExitLogUncheckedCreateWithoutDeviceSessionInput[]
    connectOrCreate?: EntryExitLogCreateOrConnectWithoutDeviceSessionInput | EntryExitLogCreateOrConnectWithoutDeviceSessionInput[]
    upsert?: EntryExitLogUpsertWithWhereUniqueWithoutDeviceSessionInput | EntryExitLogUpsertWithWhereUniqueWithoutDeviceSessionInput[]
    createMany?: EntryExitLogCreateManyDeviceSessionInputEnvelope
    set?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    disconnect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    delete?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    connect?: EntryExitLogWhereUniqueInput | EntryExitLogWhereUniqueInput[]
    update?: EntryExitLogUpdateWithWhereUniqueWithoutDeviceSessionInput | EntryExitLogUpdateWithWhereUniqueWithoutDeviceSessionInput[]
    updateMany?: EntryExitLogUpdateManyWithWhereWithoutDeviceSessionInput | EntryExitLogUpdateManyWithWhereWithoutDeviceSessionInput[]
    deleteMany?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentCreateWithoutDepartmentInput = {
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    currentStatus?: $Enums.StudentStatus
    sessions?: DeviceSessionCreateNestedManyWithoutStudentInput
    logs?: EntryExitLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDepartmentInput = {
    id?: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    currentStatus?: $Enums.StudentStatus
    sessions?: DeviceSessionUncheckedCreateNestedManyWithoutStudentInput
    logs?: EntryExitLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentCreateManyDepartmentInputEnvelope = {
    data: StudentCreateManyDepartmentInput | StudentCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutDepartmentInput, StudentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutDepartmentInput, StudentUncheckedUpdateWithoutDepartmentInput>
  }

  export type StudentUpdateManyWithWhereWithoutDepartmentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    mobileNo?: StringFilter<"Student"> | string
    roomNo?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    departmentId?: IntFilter<"Student"> | number
    currentStatus?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
  }

  export type DepartmentCreateWithoutStudentsInput = {
    name: string
  }

  export type DepartmentUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
  }

  export type DepartmentCreateOrConnectWithoutStudentsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
  }

  export type DeviceSessionCreateWithoutStudentInput = {
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
    logs?: EntryExitLogCreateNestedManyWithoutDeviceSessionInput
  }

  export type DeviceSessionUncheckedCreateWithoutStudentInput = {
    id?: number
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
    logs?: EntryExitLogUncheckedCreateNestedManyWithoutDeviceSessionInput
  }

  export type DeviceSessionCreateOrConnectWithoutStudentInput = {
    where: DeviceSessionWhereUniqueInput
    create: XOR<DeviceSessionCreateWithoutStudentInput, DeviceSessionUncheckedCreateWithoutStudentInput>
  }

  export type DeviceSessionCreateManyStudentInputEnvelope = {
    data: DeviceSessionCreateManyStudentInput | DeviceSessionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EntryExitLogCreateWithoutStudentInput = {
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    admin?: AdminCreateNestedOneWithoutLogsInput
    deviceSession?: DeviceSessionCreateNestedOneWithoutLogsInput
  }

  export type EntryExitLogUncheckedCreateWithoutStudentInput = {
    id?: number
    deviceSessionId?: number | null
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    adminId?: number | null
  }

  export type EntryExitLogCreateOrConnectWithoutStudentInput = {
    where: EntryExitLogWhereUniqueInput
    create: XOR<EntryExitLogCreateWithoutStudentInput, EntryExitLogUncheckedCreateWithoutStudentInput>
  }

  export type EntryExitLogCreateManyStudentInputEnvelope = {
    data: EntryExitLogCreateManyStudentInput | EntryExitLogCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutStudentsInput = {
    update: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutStudentsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type DepartmentUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceSessionUpsertWithWhereUniqueWithoutStudentInput = {
    where: DeviceSessionWhereUniqueInput
    update: XOR<DeviceSessionUpdateWithoutStudentInput, DeviceSessionUncheckedUpdateWithoutStudentInput>
    create: XOR<DeviceSessionCreateWithoutStudentInput, DeviceSessionUncheckedCreateWithoutStudentInput>
  }

  export type DeviceSessionUpdateWithWhereUniqueWithoutStudentInput = {
    where: DeviceSessionWhereUniqueInput
    data: XOR<DeviceSessionUpdateWithoutStudentInput, DeviceSessionUncheckedUpdateWithoutStudentInput>
  }

  export type DeviceSessionUpdateManyWithWhereWithoutStudentInput = {
    where: DeviceSessionScalarWhereInput
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyWithoutStudentInput>
  }

  export type DeviceSessionScalarWhereInput = {
    AND?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
    OR?: DeviceSessionScalarWhereInput[]
    NOT?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
    id?: IntFilter<"DeviceSession"> | number
    studentId?: IntFilter<"DeviceSession"> | number
    deviceId?: StringFilter<"DeviceSession"> | string
    deviceName?: StringFilter<"DeviceSession"> | string
    ipAddress?: StringFilter<"DeviceSession"> | string
    latitude?: DecimalFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"DeviceSession"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    lastSeen?: DateTimeFilter<"DeviceSession"> | Date | string
    isActive?: BoolFilter<"DeviceSession"> | boolean
  }

  export type EntryExitLogUpsertWithWhereUniqueWithoutStudentInput = {
    where: EntryExitLogWhereUniqueInput
    update: XOR<EntryExitLogUpdateWithoutStudentInput, EntryExitLogUncheckedUpdateWithoutStudentInput>
    create: XOR<EntryExitLogCreateWithoutStudentInput, EntryExitLogUncheckedCreateWithoutStudentInput>
  }

  export type EntryExitLogUpdateWithWhereUniqueWithoutStudentInput = {
    where: EntryExitLogWhereUniqueInput
    data: XOR<EntryExitLogUpdateWithoutStudentInput, EntryExitLogUncheckedUpdateWithoutStudentInput>
  }

  export type EntryExitLogUpdateManyWithWhereWithoutStudentInput = {
    where: EntryExitLogScalarWhereInput
    data: XOR<EntryExitLogUpdateManyMutationInput, EntryExitLogUncheckedUpdateManyWithoutStudentInput>
  }

  export type EntryExitLogScalarWhereInput = {
    AND?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
    OR?: EntryExitLogScalarWhereInput[]
    NOT?: EntryExitLogScalarWhereInput | EntryExitLogScalarWhereInput[]
    id?: IntFilter<"EntryExitLog"> | number
    studentId?: IntFilter<"EntryExitLog"> | number
    deviceSessionId?: IntNullableFilter<"EntryExitLog"> | number | null
    requestType?: EnumRequestTypeFilter<"EntryExitLog"> | $Enums.RequestType
    requestTime?: DateTimeFilter<"EntryExitLog"> | Date | string
    approvalStatus?: EnumApprovalStatusFilter<"EntryExitLog"> | $Enums.ApprovalStatus
    approvalTime?: DateTimeNullableFilter<"EntryExitLog"> | Date | string | null
    latitude?: DecimalFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"EntryExitLog"> | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFilter<"EntryExitLog"> | boolean
    suspicious?: BoolFilter<"EntryExitLog"> | boolean
    adminId?: IntNullableFilter<"EntryExitLog"> | number | null
  }

  export type EntryExitLogCreateWithoutAdminInput = {
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    student: StudentCreateNestedOneWithoutLogsInput
    deviceSession?: DeviceSessionCreateNestedOneWithoutLogsInput
  }

  export type EntryExitLogUncheckedCreateWithoutAdminInput = {
    id?: number
    studentId: number
    deviceSessionId?: number | null
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
  }

  export type EntryExitLogCreateOrConnectWithoutAdminInput = {
    where: EntryExitLogWhereUniqueInput
    create: XOR<EntryExitLogCreateWithoutAdminInput, EntryExitLogUncheckedCreateWithoutAdminInput>
  }

  export type EntryExitLogCreateManyAdminInputEnvelope = {
    data: EntryExitLogCreateManyAdminInput | EntryExitLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type EntryExitLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: EntryExitLogWhereUniqueInput
    update: XOR<EntryExitLogUpdateWithoutAdminInput, EntryExitLogUncheckedUpdateWithoutAdminInput>
    create: XOR<EntryExitLogCreateWithoutAdminInput, EntryExitLogUncheckedCreateWithoutAdminInput>
  }

  export type EntryExitLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: EntryExitLogWhereUniqueInput
    data: XOR<EntryExitLogUpdateWithoutAdminInput, EntryExitLogUncheckedUpdateWithoutAdminInput>
  }

  export type EntryExitLogUpdateManyWithWhereWithoutAdminInput = {
    where: EntryExitLogScalarWhereInput
    data: XOR<EntryExitLogUpdateManyMutationInput, EntryExitLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type StudentCreateWithoutLogsInput = {
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    currentStatus?: $Enums.StudentStatus
    department: DepartmentCreateNestedOneWithoutStudentsInput
    sessions?: DeviceSessionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutLogsInput = {
    id?: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    departmentId: number
    currentStatus?: $Enums.StudentStatus
    sessions?: DeviceSessionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutLogsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutLogsInput, StudentUncheckedCreateWithoutLogsInput>
  }

  export type AdminCreateWithoutLogsInput = {
    name: string
    email: string
    password: string
  }

  export type AdminUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type AdminCreateOrConnectWithoutLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
  }

  export type DeviceSessionCreateWithoutLogsInput = {
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
    student: StudentCreateNestedOneWithoutSessionsInput
  }

  export type DeviceSessionUncheckedCreateWithoutLogsInput = {
    id?: number
    studentId: number
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
  }

  export type DeviceSessionCreateOrConnectWithoutLogsInput = {
    where: DeviceSessionWhereUniqueInput
    create: XOR<DeviceSessionCreateWithoutLogsInput, DeviceSessionUncheckedCreateWithoutLogsInput>
  }

  export type StudentUpsertWithoutLogsInput = {
    update: XOR<StudentUpdateWithoutLogsInput, StudentUncheckedUpdateWithoutLogsInput>
    create: XOR<StudentCreateWithoutLogsInput, StudentUncheckedCreateWithoutLogsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutLogsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutLogsInput, StudentUncheckedUpdateWithoutLogsInput>
  }

  export type StudentUpdateWithoutLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    department?: DepartmentUpdateOneRequiredWithoutStudentsNestedInput
    sessions?: DeviceSessionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    departmentId?: IntFieldUpdateOperationsInput | number
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    sessions?: DeviceSessionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AdminUpsertWithoutLogsInput = {
    update: XOR<AdminUpdateWithoutLogsInput, AdminUncheckedUpdateWithoutLogsInput>
    create: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutLogsInput, AdminUncheckedUpdateWithoutLogsInput>
  }

  export type AdminUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceSessionUpsertWithoutLogsInput = {
    update: XOR<DeviceSessionUpdateWithoutLogsInput, DeviceSessionUncheckedUpdateWithoutLogsInput>
    create: XOR<DeviceSessionCreateWithoutLogsInput, DeviceSessionUncheckedCreateWithoutLogsInput>
    where?: DeviceSessionWhereInput
  }

  export type DeviceSessionUpdateToOneWithWhereWithoutLogsInput = {
    where?: DeviceSessionWhereInput
    data: XOR<DeviceSessionUpdateWithoutLogsInput, DeviceSessionUncheckedUpdateWithoutLogsInput>
  }

  export type DeviceSessionUpdateWithoutLogsInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type DeviceSessionUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentCreateWithoutSessionsInput = {
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    currentStatus?: $Enums.StudentStatus
    department: DepartmentCreateNestedOneWithoutStudentsInput
    logs?: EntryExitLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    departmentId: number
    currentStatus?: $Enums.StudentStatus
    logs?: EntryExitLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSessionsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSessionsInput, StudentUncheckedCreateWithoutSessionsInput>
  }

  export type EntryExitLogCreateWithoutDeviceSessionInput = {
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    student: StudentCreateNestedOneWithoutLogsInput
    admin?: AdminCreateNestedOneWithoutLogsInput
  }

  export type EntryExitLogUncheckedCreateWithoutDeviceSessionInput = {
    id?: number
    studentId: number
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    adminId?: number | null
  }

  export type EntryExitLogCreateOrConnectWithoutDeviceSessionInput = {
    where: EntryExitLogWhereUniqueInput
    create: XOR<EntryExitLogCreateWithoutDeviceSessionInput, EntryExitLogUncheckedCreateWithoutDeviceSessionInput>
  }

  export type EntryExitLogCreateManyDeviceSessionInputEnvelope = {
    data: EntryExitLogCreateManyDeviceSessionInput | EntryExitLogCreateManyDeviceSessionInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutSessionsInput = {
    update: XOR<StudentUpdateWithoutSessionsInput, StudentUncheckedUpdateWithoutSessionsInput>
    create: XOR<StudentCreateWithoutSessionsInput, StudentUncheckedCreateWithoutSessionsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSessionsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSessionsInput, StudentUncheckedUpdateWithoutSessionsInput>
  }

  export type StudentUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    department?: DepartmentUpdateOneRequiredWithoutStudentsNestedInput
    logs?: EntryExitLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    departmentId?: IntFieldUpdateOperationsInput | number
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    logs?: EntryExitLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type EntryExitLogUpsertWithWhereUniqueWithoutDeviceSessionInput = {
    where: EntryExitLogWhereUniqueInput
    update: XOR<EntryExitLogUpdateWithoutDeviceSessionInput, EntryExitLogUncheckedUpdateWithoutDeviceSessionInput>
    create: XOR<EntryExitLogCreateWithoutDeviceSessionInput, EntryExitLogUncheckedCreateWithoutDeviceSessionInput>
  }

  export type EntryExitLogUpdateWithWhereUniqueWithoutDeviceSessionInput = {
    where: EntryExitLogWhereUniqueInput
    data: XOR<EntryExitLogUpdateWithoutDeviceSessionInput, EntryExitLogUncheckedUpdateWithoutDeviceSessionInput>
  }

  export type EntryExitLogUpdateManyWithWhereWithoutDeviceSessionInput = {
    where: EntryExitLogScalarWhereInput
    data: XOR<EntryExitLogUpdateManyMutationInput, EntryExitLogUncheckedUpdateManyWithoutDeviceSessionInput>
  }

  export type StudentCreateManyDepartmentInput = {
    id?: number
    email: string
    password: string
    name: string
    mobileNo: string
    roomNo: string
    gender: $Enums.Gender
    currentStatus?: $Enums.StudentStatus
  }

  export type StudentUpdateWithoutDepartmentInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    sessions?: DeviceSessionUpdateManyWithoutStudentNestedInput
    logs?: EntryExitLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    sessions?: DeviceSessionUncheckedUpdateManyWithoutStudentNestedInput
    logs?: EntryExitLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    roomNo?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    currentStatus?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
  }

  export type DeviceSessionCreateManyStudentInput = {
    id?: number
    deviceId: string
    deviceName: string
    ipAddress: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    lastSeen?: Date | string
    isActive?: boolean
  }

  export type EntryExitLogCreateManyStudentInput = {
    id?: number
    deviceSessionId?: number | null
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    adminId?: number | null
  }

  export type DeviceSessionUpdateWithoutStudentInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    logs?: EntryExitLogUpdateManyWithoutDeviceSessionNestedInput
  }

  export type DeviceSessionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    logs?: EntryExitLogUncheckedUpdateManyWithoutDeviceSessionNestedInput
  }

  export type DeviceSessionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryExitLogUpdateWithoutStudentInput = {
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    admin?: AdminUpdateOneWithoutLogsNestedInput
    deviceSession?: DeviceSessionUpdateOneWithoutLogsNestedInput
  }

  export type EntryExitLogUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceSessionId?: NullableIntFieldUpdateOperationsInput | number | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EntryExitLogUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceSessionId?: NullableIntFieldUpdateOperationsInput | number | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EntryExitLogCreateManyAdminInput = {
    id?: number
    studentId: number
    deviceSessionId?: number | null
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
  }

  export type EntryExitLogUpdateWithoutAdminInput = {
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutLogsNestedInput
    deviceSession?: DeviceSessionUpdateOneWithoutLogsNestedInput
  }

  export type EntryExitLogUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceSessionId?: NullableIntFieldUpdateOperationsInput | number | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryExitLogUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    deviceSessionId?: NullableIntFieldUpdateOperationsInput | number | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntryExitLogCreateManyDeviceSessionInput = {
    id?: number
    studentId: number
    requestType: $Enums.RequestType
    requestTime?: Date | string
    approvalStatus?: $Enums.ApprovalStatus
    approvalTime?: Date | string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    locationValid: boolean
    suspicious?: boolean
    adminId?: number | null
  }

  export type EntryExitLogUpdateWithoutDeviceSessionInput = {
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutLogsNestedInput
    admin?: AdminUpdateOneWithoutLogsNestedInput
  }

  export type EntryExitLogUncheckedUpdateWithoutDeviceSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EntryExitLogUncheckedUpdateManyWithoutDeviceSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    requestTime?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    approvalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationValid?: BoolFieldUpdateOperationsInput | boolean
    suspicious?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceSessionCountOutputTypeDefaultArgs instead
     */
    export type DeviceSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntryExitLogDefaultArgs instead
     */
    export type EntryExitLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntryExitLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceSessionDefaultArgs instead
     */
    export type DeviceSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GateConfigDefaultArgs instead
     */
    export type GateConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GateConfigDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}