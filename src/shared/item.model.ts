enum ItemType {story, comment};

export class Item {

  public createdAt: Date;
  public directChildren: Array<number>;
  public id: number;
  public score: number;
  public text: string;
  public title: string;
  public totalChildren: number;
  public type: ItemType;
  public url: string;
  public userHandle: string;

  constructor(json) {
    Object.assign(this, {
      createdAt: new Date((json.time || 0) * 1000),
      directChildren: json.kids,
      id: json.id,
      score: json.score,
      text: json.text,
      title: json.title,
      totalChildren: json.descendants,
      type: ItemType[json.type],
      url: json.url,
      userHandle: json.by
    });
  }
}
