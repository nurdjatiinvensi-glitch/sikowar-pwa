{
  residentData.map((item) => (
    <ResidentCard
      key={item.id}
      item={item}
      onClick={() => router.push(`/resident/${item.id}`)}
    />
  ));
}
