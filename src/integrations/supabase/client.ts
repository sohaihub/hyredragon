
// This file has been updated to no longer use Supabase
// The application now uses localStorage for form submissions

// This file is kept to prevent import errors in the existing codebase
// but does not contain any actual Supabase client implementation

export const supabase = {
  // Dummy methods to prevent errors
  from: () => ({
    select: () => ({
      order: () => ({
        range: () => ({ data: [], error: null })
      })
    }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ data: null, error: null }),
    delete: () => ({ data: null, error: null }),
    eq: () => ({ data: null, error: null }),
    single: () => ({ data: null, error: null })
  }),
  storage: {
    from: () => ({
      upload: () => ({ data: null, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } })
    })
  },
  auth: {
    signIn: () => Promise.resolve({ user: null, session: null, error: null }),
    signUp: () => Promise.resolve({ user: null, session: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ unsubscribe: () => {} })
  },
  rpc: () => Promise.resolve({ data: null, error: null })
};
