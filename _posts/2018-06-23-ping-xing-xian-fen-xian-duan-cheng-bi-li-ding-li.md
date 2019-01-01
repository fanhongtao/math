---
layout: post
title: 平行线分线段成比例定理
categories: 几何
tags: [平行]
copyright: cn
book: 数学瑰宝
---

若直线 $l_1$，$l_2$，$l_3$ 满足 $l_1 \px l_2 \px l_3$，直线 $AC$，$DF$ 分别交 $l_1$，$l_2$，$l_3$ 于 $A$，$B$，$C$ 和 $D$，$E$，$F$，则 

$$ \frac{AB}{BC} = \frac{DE}{EF} $$

<!--more-->

## 证明

如图 <img src="{{ site.baseurl }}{% link /pic/pxx_fenxianduan.svg %}"/>，联结 $AE$，$BD$，$BF$，$CE$，则

  $$ \frac{S_{\triangle ABE}}{S_{\triangle BCE}} = \frac{AB}{BC} 
\quad,\quad  \frac{S_{\triangle DBE}}{S_{\triangle BEF}} = \frac{DE}{EF} $$

由 $l_1 \px l_2 \px l_3$，*（根据[平行线与面积关系定理]({{ site.baseurl }}{% link _posts/2018-06-22-ping-xing-xian-yu-mian-ji-guan-xi-ding-li.md %})）* 有

  $$ S_{\triangle ABE} = S_{\triangle DBE} \quad,\quad S_{\triangle BCE} = S_{\triangle BEF} $$
  
从而

  $$ \frac{AB}{BC} = \frac{DE}{EF} $$

注： 此定理的逆定理也是成立的。

## 推论

上述定理有下列推论：

### 推论1

平行于三角形一边的直线截其他两边（或两边的延长线），所得的对应线段成比例，反之亦真。

### 推论2

一直线束截两条平等直线，所得的对应线段成比例。

### 推论3

若一直线束中的直线 $PAB$，$PCD$，$PEF$ 上的点 $A$，$B$，$C$，$D$，$E$，$F$ 满足 $ AC \px BD$，$CE \px DF$，则$AE \px BF$。

* content
{:toc}
