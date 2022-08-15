export const fetcher = async (
  resources: RequestInfo,
  init?: RequestInit,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(resources, init)
  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      // ?? はなんだろう?
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました',
    )
    throw error
  }
  return res.json()
}
