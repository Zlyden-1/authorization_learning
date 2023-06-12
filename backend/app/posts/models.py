from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    class Meta:
        verbose_name = "Объявление"
        verbose_name_plural = "Объявления"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Post_detail", kwargs={"pk": self.pk})

